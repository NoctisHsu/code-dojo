// 題目六：實現如下語法的功能：var a = add(2)(3)(4);
function add(x) {
  var mid;
  mid = x || 0;
  function addObj(x) {
    x = x || 0;
    mid = mid + x;
    return addObj;
  }
  addObj.valueOf = function () {
    return mid;
  };
  addObj.toString = function () {
    return mid;
  };
  return addObj;
}
//call the obj.valueOf function
//call the obj.valueOf function
console.log(add(2));
console.log(add(2)(3));
console.log(add(2)(3)(4));
console.log(add(2)(3)(4)(5));