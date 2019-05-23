var mtrlButtons = document.querySelectorAll(".showcase .mtrl-btn");
var modal = document.querySelector(".snippet-modal-background");
var copiedTooltip = document.querySelector(".copied-tooltip");
var codeSnippet = document.querySelector("#code-snippet");

isToolTipActive = false;

function showCode(e) {
    const rx = new RegExp("<span[\\d\\D]*?\/span>", "g");
    let code = this.outerHTML.replace(/(\r\n|\n|\r)/gm, "").replace(/\s+/g, " ");
    code = code.replace(rx, "");
    codeSnippet.innerHTML = code;
    showModal();
}

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

function hideModal() {
    modal.classList.remove('show');
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