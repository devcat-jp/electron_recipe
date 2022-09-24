### 実行例
ボタンをクリックするとメモ帳が起動します（Win限定）  
<img src="images/cap.png" width="50%">  

## 使用法 
### 確認環境
Windows11
node.js：16.17.0  
electron：20.1.3  

### npmを使用した初期化 
```
$ npm init -y
```
### electronを環境に追加
```
$ npm install electron --save-dev
```
### package.jsonの修正
```
$ vim package.json
- "main": "index.js",
+ "main": "./src/main.js",
- "package-name": "echo \"Error: no test specified\" && exit 1"
+ "start": "electron ."
```
### 起動
```
$ npm start
```