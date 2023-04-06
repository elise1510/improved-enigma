//font functions
function increaseFontSize() {
  const editor = document.querySelector('#editor');
  const currentFontSize = parseInt(getComputedStyle(editor).fontSize);
  editor.style.fontSize = `${currentFontSize + 1}px`;
}

function decreaseFontSize() {
  const editor = document.querySelector('#editor');
  const currentFontSize = parseInt(getComputedStyle(editor).fontSize);
  editor.style.fontSize = `${currentFontSize - 1}px`;
}
function changeFont(fontName) {
    const editor = document.querySelector('#editor');
    editor.style.fontFamily = fontName;
  }
  const { ipcRenderer } = require('electron');

function changeFontColor(color) {
  ipcRenderer.send('change-font-color', color);
}
function showDialog() {
    const { dialog } = require('electron').remote;
    const editor = document.querySelector('#editor');
    const fonts = ['Arial', 'Verdana', 'Tahoma', 'Times New Roman'];

    dialog.showMessageBox(
        {
            type: 'question',
            message: 'Select a font',
            detail: 'Please select a font from the list below',
            buttons: fonts,
        },
        (response) => {
            if (response >= 0 && response < fonts.length) {
                editor.style.fontFamily = fonts[response];
            }
        },
    );
}

module.exports = { changeFontColor, changeFont, decreaseFontSize, increaseFontSize, showDialog };