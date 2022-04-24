# gas-html

## メニュー
```js
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

## HTML利用
```js
// ************************************
// メニューの追加
// ************************************
function onOpen(e) {

  var ui = SpreadsheetApp.getUi();
  ui.createMenu('スクリプトの実行')
    .addItem('HTMLの利用', 'createLinkDialog')
    .addToUi();
	
}

// ************************************
// 
// ************************************
function createLinkDialog() {

  var html = HtmlService.createHtmlOutputFromFile('use-html');
  html.setWidth(1200);
  html.setHeight(1200);
  SpreadsheetApp.getUi().showModalDialog(html, "リンク");

}
```
