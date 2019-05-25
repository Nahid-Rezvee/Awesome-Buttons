var mtrlButtons = document.querySelectorAll(".showcase .mtrl-btn");
var modal = document.querySelector(".snippet-modal-background");
var dropdown = document.querySelector(".dropdown");
var settings = document.querySelector(".settings");
var sidemenu = document.querySelector(".sidemenu");
var showcase = document.querySelector(".showcase");
var copiedTooltip = document.querySelector(".copied-tooltip");
var codeSnippet = document.querySelector("#code-snippet");

// Theme Variables
var primaryColorInputDOM = document.querySelector("#primary");
var accentColorInputDOM = document.querySelector("#accent");
var warningColorInputDOM = document.querySelector("#warning");
var dangerColorInputDOM = document.querySelector("#danger");
var darkColorInputDOM = document.querySelector("#dark");
var lightColorInputDOM = document.querySelector("#light");
var settingsInputDoms = document.querySelectorAll(".settings input");

isToolTipActive = false;
isSideMenuActive = false;
isDropdownActive = false;
isSettingsActive = false;

function showCode(e) {
    const rx = new RegExp("<span[\\d\\D]*?\/span>", "g");
    let code = this.outerHTML.replace(/(\r\n|\n|\r)/gm, "").replace(/\s+/g, " ");
    code = code.replace(rx, "");
    codeSnippet.innerHTML = code;
    showModal();
}

updateTheme();

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
    showToolTip();
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

function showToolTip() {
    if (!isToolTipActive) {
        copiedTooltip.classList.add('show-tooltip');
        isToolTipActive = true;
        setTimeout(() => {
            copiedTooltip.classList.remove('show-tooltip');
            isToolTipActive = false;
        }, 1000);
    }
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