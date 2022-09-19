// electronモジュールをimport
const { app, BrowserWindow, ipcMain, Menu } = require('electron')
const path = require('path')

// windowの作成
const createWindow = () => {
  const win = new BrowserWindow({
    width: 400,
    height: 300,
    webPreferences: {
        preload: path.join(__dirname, 'preload.js'),
    },
  })

  // コンテキストメニュー
  const menu = Menu.buildFromTemplate([
    {
      label: 'cmd',
      submenu: [
        {
          label: 'Close',
          accelerator: 'CmdOrCtrl+Q',
          role: 'close',
        },
      ],
    },
  ])
  ipcMain.on('menu:showContextMenu', () => menu.popup())

  // htmlを指定
  win.loadFile(path.join(__dirname, 'index.html'))
}

// readyイベント発生後にのみ「BrowserWindow」が呼べる仕様
app.whenReady().then(() => {
  createWindow()
  // アプリケーションがアクティブになったときに発生するイベント
  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// close処理(windows&Linux）
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})




