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
[Electron Tips ~便利なモジュールや小技~](https://qiita.com/shiro1212/items/1d30b583770fc16c22df)