// ************************************
// メニューの追加
// ************************************
function onOpen(e) {

  var ui = SpreadsheetApp.getUi();
  ui.createMenu('スクリプトの実行')
    .addItem('Logger.log', 'loggerLog')
    .addItem('console.log', 'consoleLog')
    .addItem('シートに出力', 'spreadsheetSet')
    .addToUi();
	
}

// ************************************
//
// ************************************
function loggerLog() {

  var groups = GroupsApp.getGroups();

  for( var i = 0; i < groups.length; i++ ) {
    var name = groups[i].getEmail();
    Logger.log( "----------------------------");
    Logger.log( name );
    Logger.log( "----------------------------");
    var users = groups[i].getUsers();
    for( var j = 0; j < users.length; j++ ) {
      Logger.log( users[j] );
    }

  }
  
}

// ************************************
//
// ************************************
function consoleLog() {

  var groups = GroupsApp.getGroups();

  for( var i = 0; i < groups.length; i++ ) {
    var name = groups[i].getEmail();
    console.log( "----------------------------");
    console.log( name );
    console.log( "----------------------------");
    var users = groups[i].getUsers();
    for( var j = 0; j < users.length; j++ ) {
      console.log( users[j] );
    }

  }
  
}

// ************************************
//
// ************************************
function spreadsheetSet() {

  // 現在のスプレッドシート
  var spreadsheet = SpreadsheetApp.getActive();

  // ************************************
  // 列クリア
  // ************************************
  spreadsheet.getRange('A:B').activate();
  spreadsheet.getActiveRangeList().clear({contentsOnly: true, commentsOnly: true, skipFilteredRows: true});

  var groups = GroupsApp.getGroups();

  // 行
  var row = 0;

  for( var i = 0; i < groups.length; i++ ) {
    var name = groups[i].getEmail();

    Logger.log( name );
    console.log( name );

    targetRange = spreadsheet.getRange('A' + (row + 1));
    targetRange.setValue(name);

    var users = groups[i].getUsers();
    for( var j = 0; j < users.length; j++ ) {
      targetRange = spreadsheet.getRange('B' + (row + 1));
      targetRange.setValue(users[j]);
      row++;
    }
    row ++;
  }  

  // A-B をデータで自動幅調整
  spreadsheet.getRange('A:B').activate();
  spreadsheet.getActiveSheet().autoResizeColumns(1, 2);

}
