var a = 10;
function books() {
  var book = "書本";
  return function () {
      console.log(book)
  }
};
books(30);

// 1. Global execution context： 
//    scope chain => [Globle variable object]
//.   variable object => [a, books]

// 2. books function execution context： 
//    scope chain => [Globle variable object, books variable object]
//.   variable object => [book]

// 2. anonymous function execution context： 
//    scope chain => [Globle variable object, books variable object, anonymous variable object]
//.   variable object => []

// for loop 中的 i < 5 相當於宣告 i = 5;
for(var i = 0; i < 5; i++) {
    // i 會不斷累計，但由於 setTimeout 為 marco task
    // 因此會被排入 task queue 等 execution stack (call stack) 執行完才開始執行
    // 優先序： 同步 funtion > micro task (promise etc) > marco task
    setTimeout(function(){
       console.log(i++); 
    },4000);
}
console.log(i); 
// 5
// undefined
// 5 
// 6
// 7
// 8
// 9
