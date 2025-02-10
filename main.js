const {app,BrowserWindow,ipcMain} = require('electron');
const path = require('path');

let win;

function createWindow()
{
    win = new BrowserWindow(
        {
            width:330,
            height:470,
            frame:false,
            resizable:false,
            maximizable:false,
            icon:path.join(__dirname,'icon.ico'),
            webPreferences:
            {
                nodeIntegration:true,
                contextIsolation: false,
            }

        }
    );

    win.loadFile(path.join(__dirname,'index.html'));

}

app.on('ready',createWindow);


ipcMain.on('minimize-window', () => {
    win.minimize();
});

ipcMain.on('close-window', () => {
    win.close();
});

ipcMain.on('navigate-to-menu', () => {
    win.loadFile(path.join(__dirname, 'menuone.html'));
});
