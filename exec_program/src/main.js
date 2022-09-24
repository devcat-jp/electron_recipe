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

  // 固定プログラム起動
  ipcMain.handle('buttonClick', (event, data) => {
    var exec = require('child_process').exec;
    exec("C:/WINDOWS/system32/notepad.exe");
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




