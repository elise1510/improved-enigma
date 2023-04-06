const { remote, ipcRenderer } = require('electron');
const { createMenuTemplate } = require('./menu');

const currentWindow = remote.getCurrentWindow();
const webContents = currentWindow.webContents;

webContents.executeJavaScript(`
  const webFrame = require('electron').webFrame;
  const scaleFactor = webFrame.getZoomFactor();
  const newZoomFactor = scaleFactor + 0.1;
  webFrame.setZoomFactor(newZoomFactor);
`);

ipcRenderer.on('font-color-changed', (event, status) => {
  console.log('Font color changed:', status);
});

const template = createMenuTemplate();

const menu = Menu.buildFromTemplate(template);
Menu.setApplicationMenu(menu);
