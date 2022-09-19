
// buttonクリックイベント
let count = 0
document.getElementById('clickButton').onclick = () => {
    func(count)
}


const func = async (data) => {
    // main.jsに現在の値を送信
    count = await window.api.buttonClick(data)
    // htmlに反映
    click_count.innerText = count
}

