# gas-html

## メニュー
```
function myFunction() {
  
  Logger.log("こんにちは世界");
  Logger.log("テストです");
  
  Browser.msgBox("処理が終了しました");

}

// ************************************
// メニューの追加
// ************************************
function onOpen(e) {

  var ui = SpreadsheetApp.getUi();
  ui.createMenu('スクリプトの実行')
    .addItem('実行', 'myFunction')
    .addToUi();
	
}
```
