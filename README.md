# electron_recipe

## デバッグ小ネタ
### Exiting GPU process due to errors during initialization
package.jsonを以下のように修正する
```
- "start": "electron ."
+ "start": "electron . --disable-gpu"
```