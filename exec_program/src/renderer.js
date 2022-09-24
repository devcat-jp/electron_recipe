
// buttonクリックイベント
document.getElementById('clickButton').onclick = () => {
    func()
}


const func = async (data) => {
    // イベント送信
    count = await window.api.buttonClick()
}

