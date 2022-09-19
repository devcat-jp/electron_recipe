// electronモジュールをimport
const { app, BrowserWindow, globalShortcut, screen, ipcMain, Menu } = require('electron')
const path = require('path')

let window_width = 400
let window_height = 200


// windowの作成
const createWindow = () => {
  const win = new BrowserWindow({
    width: window_width,
    height: window_height,
    webPreferences: {
        preload: path.join(__dirname, 'preload.js'),
    },
  })

  // 加算して返す
  ipcMain.handle('buttonClick', (event, data) => {
    return data + 1
  })

  // htmlを指定
  win.loadFile(path.join(__dirname, 'index.html'));
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




