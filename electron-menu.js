const { Menu, app } = require('electron');
const { showDialog } = require('./font');
const isMac = process.platform === 'darwin';

const createMenuTemplate = (saveFn,showDialog) => {
  const template = [
    {
      label: 'File',
      submenu: [
        {
          label: 'Save',
          accelerator: 'CmdOrCtrl+S',
          click() {
            saveFn();
          },
        },
      ],
    },
    {
      label: 'Edit',
      submenu: [
        { role: 'Undo', accelerator: 'CmdOrCtrl+Z' },
        { role: 'redo', accelerator: 'CmdOrCtrl+SHIFT+Z' },
        {
          label: 'Font',
          click() {
            showDialog();
          },
        },
        { type: 'separator' },
        { role: 'cut' },
        { role: 'copy' },
        { role: 'paste' },
        { role: 'delete' },
        { type: 'separator' },
        { role: 'selectAll' },
      ],
    },
  ];

  if (isMac) {
    template.unshift({
      label: app.name,
      submenu: [
        { role: 'about' },
        { type: 'separator' },
        { role: 'services' },
        { type: 'separator' },
        { role: 'hide' },
        { role: 'hideothers' },
        { role: 'unhide' },
        { type: 'separator' },
        { role: 'quit' },
      ],
    });

    // Edit menu
    template[1].submenu.push(
      { type: 'separator' },
      {
        label: 'Speech',
        submenu: [{ role: 'startspeaking' }, { role: 'stopspeaking' }],
      },
    );

    // Window menu
    template[3].submenu.push([
      { role: 'close' },
      { role: 'minimize' },
      { role: 'zoom' },
      { type: 'separator' },
      { role: 'front' },
    ]);
  }

  return template;
};

module.exports = { createMenuTemplate };
