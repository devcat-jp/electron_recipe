### 実行例
なにかファイルをドロップすると、このようにパスが表示されます  
![実行例](image/cap.png)

## 使用法 
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

### 参考
[Electron でファイルを読み込む](https://noitalog.tokyo/electron-show-open-dialog/)