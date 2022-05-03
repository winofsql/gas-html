// *******************************************
// シートの ID で参照されるスプレッドシートの
// シート名の一覧をアクティブなシートにセット
// *******************************************
function getSheetNames() {

  // ID で参照されるシート
  var refSpreadSheet = SpreadsheetApp.openById("1KrrHNk-rRt8In8K2b78YFXN1nhEx0AB1TaWcaeTeRB4");
  // Sheet オブジェクトの配列
  var sheets = refSpreadSheet.getSheets();
  // 要素数
  var cnt = sheets.length;

  // アクティブなシート
  var spreadsheet = SpreadsheetApp.getActive();
  var targetRange;
  var sheetName;

  for( var i = 0; i < cnt; i++ ) {
    targetRange = spreadsheet.getRange('F' + (i + 1));
    sheetName = sheets[i].getName();
    targetRange.setValue(sheetName);
    Logger.log(sheetName);
    console.log(sheetName);
  }
  
}
