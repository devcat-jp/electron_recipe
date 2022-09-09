// electronモジュールをimport
const { app, BrowserWindow } = require('electron')

// windowの作成
const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
  })
  // 作成したindex.htmlを指定する
  win.loadFile('index.html')
}
// readyイベント発生後にのみ「BrowserWindow」が呼べる仕様
app.whenReady().then(() => {
  createWindow()
})
// close処理(windows&Linux）
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})