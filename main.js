// Importation des modules ElectronJS
const { app, BrowserWindow } = require('electron');
const path = require('node:path');

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            openai: path.join(__dirname, 'openai.js')
        }
    });

    win.loadFile(path.join(__dirname,'dist/index.html'));
};

// Lancez l'application
app.whenReady().then(() => {
    createWindow()
});

// Fermez l'application pour Windows et Linux
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
});
