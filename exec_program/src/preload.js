const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('api', {
    buttonClick: () => ipcRenderer.invoke('buttonClick'),
})