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

## Classroom 利用
```js
// ************************************
// 
// ************************************
function getClassroomData() {

  // 現在のスプレッドシート
  var spreadsheet = SpreadsheetApp.getActive();

	// ************************************
  // 列クリア
	// ************************************
  spreadsheet.getRange('A:D').activate();
  spreadsheet.getActiveRangeList().clear({contentsOnly: true, commentsOnly: true, skipFilteredRows: true});

  // Classroom 一覧  
  var json = Classroom.Courses.list();

  // Classroom 数
  var cnt = json.courses.length;
  
  // トピック一覧用
  var jsonTopic = null;

  // セル用
  var targetRange = null;

  // 行
  var row = 0;

  for( var i = 0; i < cnt; i++ ) {
    targetRange = spreadsheet.getRange('A' + (row + 1));
    targetRange.setValue(json.courses[i].id);
    targetRange = spreadsheet.getRange('B' + (row + 1));
    targetRange.setValue(json.courses[i].name);

    // ************************************
    // トピック一覧
    // ************************************
    jsonTopic = Classroom.Courses.Topics.list( json.courses[i].id );
    if ( jsonTopic.topic == null ) {
      row += 2;
    }
    else {
      try {
        for ( var j = 0; j < jsonTopic.topic.length; j++ ) {
          targetRange = spreadsheet.getRange('C' + (row + 1));
          targetRange.setValue(jsonTopic.topic[j].topicId);
          targetRange = spreadsheet.getRange('D' + (row + 1));
          targetRange.setValue(jsonTopic.topic[j].name);
          row++;
        }
      }
      catch(e){
      }

      row++;
    }     

  }

}
```
