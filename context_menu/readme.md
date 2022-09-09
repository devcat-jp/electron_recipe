## 使用法 
### pnpmを使用した初期化 
```
$ pnpm init
```
### electronを環境に追加
```
$ pnpm install electron --save-dev
```
### package.jsonの修正
```
$ vim package.json
- "main": "index.js",
+ "main": "main.js",
- "package-name": "echo \"Error: no test specified\" && exit 1"
+ "start": "electron ."
```
### 起動
```
$ pnpm start
```