const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require('path');

function createWindow(){
    let win = new BrowserWindow({
        width:800,
        height:600,
    });
    win.webContents.openDevTools();
    win.loadURL(process.env.REACT_APP_URL || './build/index.html');
    win.on('close',()=>{win = null});
}

app.whenReady()
.then(()=>createWindow());

app.on('window-all-closed',()=>{
    if(process.platform === 'darwin') app.quit();
})