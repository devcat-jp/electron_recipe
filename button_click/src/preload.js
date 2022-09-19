const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('api', {
    buttonClick: (data) => ipcRenderer.invoke('buttonClick', data),
})