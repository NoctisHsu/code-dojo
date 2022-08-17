/**
 * 问题: 给定一个数 n 与 k, 列出所有 1 ... n 中所有 k 个数的组合
 *
 * 范例: n = 4, k = 2
 *  [1, 2], [1, 3], [1, 4], [2, 3], [2, 4], [3, 4]
 *
 * 变形:
 *
 *  顺序不 care
 *
 */
var combile = function (n, k) {
  let res = [];
  process(res, [], 0, n, k);
  return res;
};

var process = function (res, current, start, n, k) {
  if (k === 0) {
    res.push(Array.from(current));
    return;
  }
  for (var i = start; i < n; i++) {
    current.push(i + 1);
    process(res, current, i + 1, n, k - 1);
    current.pop();
  }
  console.log(res);
};

combile(4, 2);
