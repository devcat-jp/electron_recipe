const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('api', {
  showContextMenu: () => ipcRenderer.send('menu:showContextMenu'),
})