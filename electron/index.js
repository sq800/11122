import { app,BrowserWindow } from "electron";
import path from 'path'

// let win

const createWindow =()=>{
    var win =new BrowserWindow({
        webPreferences:{
            devTools:true,
            contextIsolation:false,
            nodeIntegration:true
        }
    })
    if(app.isPackaged){
        win.loadFile(path.join(__dirname,"../index.html"))
    }else{
        win.loadURL(`http://localhost:5173/`)
    }
}
app.whenReady().then(createWindow)