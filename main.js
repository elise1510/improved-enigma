//main file - Main.js
const { saveFile } = require('./save');
const { createMenuTemplate } = require('./electron-menu');
const { showDialog } = require('./font');
const { app, BrowserWindow, Menu } = require('electron');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({ width: 800, height: 600 });
  mainWindow.loadFile('index.html');
  const menu = Menu.buildFromTemplate(createMenuTemplate(saveFile,showDialog));
  Menu.setApplicationMenu(menu);
}

app.whenReady().then(() => {
  createWindow();
});

// Quit when all windows are closed, except on macOS
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// Listen for events from renderer process
const { ipcMain } = require('electron');
const { changeFontColor } = require('./font');

ipcMain.on('change-font-color', (event, color) => {
  changeFontColor(color);
});
