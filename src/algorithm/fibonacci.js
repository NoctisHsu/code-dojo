// 題目四：利用JavaScript打印出Fibonacci數（不使用全局變量）

var fibonacci2 = function (x) {
  if (x < 0) {
    throw "Can‘t be negative";
    return;
  }
  if (x === 0 || x === 1) {
    return x;
  }
  var num = fibonacci2(x - 1) + fibonacci2(x - 2);
  return num;
};
console.time(32);
console.log(fibonacci2(32));
console.timeEnd(32);
