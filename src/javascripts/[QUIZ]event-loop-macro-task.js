var w1Date;
var w2Date;
function w1 () {
     w1Date = Date.now();
}
function w2 () {
     w2Date = Date.now();
     console.log('time sp;', w2Date - w1Date + 'ms');
}
setTimeout(w1, 100);
setTimeout(w2, 200);
function timeLoop (k) {
     var now = Date.now();
     while(Date.now() - now < k) {};
}
timeLoop(500);
// 答案：time sp; 0ms
