
// コンテキストメニューイベント
window.addEventListener('contextmenu', (e) => {
  e.preventDefault()
  // preload.jsの定義
  window.api.showContextMenu()
})