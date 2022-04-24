## 指定列クリア
```js
function myFunction() {
  var spreadsheet = SpreadsheetApp.getActive();
  spreadsheet.getRange('A:A').activate();
  spreadsheet.getActiveRangeList().clear({contentsOnly: true, skipFilteredRows: true});
}
```

## オートフィル1000行
```js
function myFunction() {
  var spreadsheet = SpreadsheetApp.getActive();
  spreadsheet.getRange('B1').activate();
  spreadsheet.getActiveRange().autoFill(spreadsheet.getRange('B1:B1000'), SpreadsheetApp.AutoFillSeries.ALTERNATE_SERIES);
}
```
