const mtrlButtons = document.querySelectorAll(".showcase .mtrl-btn");
const modal = document.querySelector(".snippet-modal-background");
const dropdown = document.querySelector(".dropdown");
const settings = document.querySelector(".settings");
const saySomethingModalDOM = document.querySelector(".say-something-modal-background");
const sidemenu = document.querySelector(".sidemenu");
const showcase = document.querySelector(".showcase");
const copiedTooltip = document.querySelector(".copied-tooltip");
const codeSnippet = document.querySelector("#code-snippet");

// Theme Variables
const primaryColorInputDOM = document.querySelector("#primary");
const accentColorInputDOM = document.querySelector("#accent");
const warningColorInputDOM = document.querySelector("#warning");
const dangerColorInputDOM = document.querySelector("#danger");
const darkColorInputDOM = document.querySelector("#dark");
const lightColorInputDOM = document.querySelector("#light");
const settingsInputDoms = document.querySelectorAll(".settings input");

var isSideMenuActive = false;
var isDropdownActive = false;
var isSettingsActive = false;
var isSaySomethingActive = false;

function showCode(e) {
    const spanTokenizeRX = new RegExp("<span[\\d\\D]*?\/span>", "g");
    this.removeAttribute("style");
    let code = this.outerHTML.replace(/(\r\n|\n|\r)/gm, "").replace(/\s+/g, " ");
    code = code.replace(spanTokenizeRX, "");
    codeSnippet.innerHTML = code;
    showModal();
}

settingsInputDoms.forEach(input => {
    input.addEventListener('keydown', function onEvent(event) {
        if (event.key === "Enter") {
            updateTheme();
        }
    });
});

mtrlButtons.forEach(link => link.addEventListener("click", showCode));


function copyCode() {
    codeSnippet.select();
    document.execCommand("copy");
    clearSelection();
    showCopiedToolTip();
}

function showModal() {
    modal.classList.add('show');
}

function hideModal() {
    modal.classList.remove('show');
}

function toggleSidemenu() {
    if (isSideMenuActive) {
        hideSidemenu();
    } else {
        showSidemenu();
    }
}

function showSidemenu() {
    sidemenu.classList.add('show');
    showcase.classList.add('shrink');
    isSideMenuActive = true;
}

function hideSidemenu() {
    sidemenu.classList.remove('show');
    showcase.classList.remove('shrink');
    isSideMenuActive = false;
}

function toggleDropdown() {
    if (isDropdownActive) {
        hideDropdown();
    } else {
        showDropdown();
    }
}

function showDropdown() {
    dropdown.classList.add('show');
    isDropdownActive = true;
}

function hideDropdown() {
    dropdown.classList.remove('show');
    isDropdownActive = false;
}

function toggleSaySomething() {
    if (isSaySomethingActive) {
        hideSaySomething();
    } else {
        showSaySomething();
    }
}

function showSaySomething() {
    saySomethingModalDOM.classList.add('show');
    isSaySomethingActive = true;
}

function hideSaySomething() {
    saySomethingModalDOM.classList.remove('show');
    isSaySomethingActive = false;
}

function toggleSettings() {
    if (isSettingsActive) {
        hideSettings();
    } else {
        showSettings();
    }
}

function showSettings() {
    settings.classList.add('show');
    isSettingsActive = true;
}

function hideSettings() {
    settings.classList.remove('show');
    isSettingsActive = false;
}

function showCopiedToolTip() {
    copiedTooltip.classList.add('show-tooltip');
    setTimeout(() => {
        copiedTooltip.classList.remove('show-tooltip');
    }, 1000);
}

function clearSelection() {
    if (window.getSelection) {
        if (window.getSelection().empty) { // Chrome
            window.getSelection().empty();
        } else if (window.getSelection().removeAllRanges) { // Firefox
            window.getSelection().removeAllRanges();
        }
    } else if (document.selection) { // IE?
        document.selection.empty();
    }
}

function updateTheme() {
    const primaryColor = primaryColorInputDOM.value;
    const accentColor = accentColorInputDOM.value;
    const warningColor = warningColorInputDOM.value;
    const dangerColor = dangerColorInputDOM.value;
    const darkColor = darkColorInputDOM.value;
    const lightColor = lightColorInputDOM.value;

    primaryColorInputDOM.parentElement.style.borderBottomColor = primaryColor;
    accentColorInputDOM.parentElement.style.borderBottomColor = accentColor;
    warningColorInputDOM.parentElement.style.borderBottomColor = warningColor;
    dangerColorInputDOM.parentElement.style.borderBottomColor = dangerColor;
    darkColorInputDOM.parentElement.style.borderBottomColor = darkColor;
    lightColorInputDOM.parentElement.style.borderBottomColor = lightColor;


    mtrlButtons.forEach(btn => {
        btn.style.setProperty('--primary-color', primaryColor);
        btn.style.setProperty('--accent-color', accentColor);
        btn.style.setProperty('--warning-color', warningColor);
        btn.style.setProperty('--danger-color', dangerColor);
        btn.style.setProperty('--dark-color', darkColor);
        btn.style.setProperty('--dark-color', darkColor);
        btn.style.setProperty('--light-color', lightColor);
    });

}

toggleSidemenu();
updateTheme();
