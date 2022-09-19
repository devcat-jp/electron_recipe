
// dragイベントの登録
document.addEventListener('drop', (e) => {
    e.preventDefault();
    e.stopPropagation();
    // ファイル分繰り返す
    for (const f of e.dataTransfer.files) {
        console.log('File(s) you dragged here: ', f.path)
        func(f.path)
    }
});
document.addEventListener('dragover', (e) => {
    e.preventDefault();
    e.stopPropagation();
});


const func = async (path) => {
    // 例としてはmain.jsにパスを伝達し、パスを戻す
    const response = await window.api.dropEvent(path)
    // htmlに反映
    disp_path.innerText = response
}

