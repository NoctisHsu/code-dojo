//Jack
// Goodbye, Stark
// Goodbye, Dan
function say() {
  if (typeof name === 'undefined') {
    var name = 'xng';
    console.log('Goodbye, ' + this.name);
  } else {
    console.log('Hello, ' + name);
  }
}
var name = 'Dan';

class Student {
	constructor() {
		var name = 'Jack';
		this.name = 'Stark';
		console.log(name);
	}

	say = say
}

var s = new Student();
s.say();
say();



//[A] time sp:700.077ms
//[B] time sp:500.075ms
//[C] time sp:100.077ms
//[D] time sp:0.075ms

var w1Date;
var w2Date;
function w1() {
  w1Date = Date.now();
}

function w2() {
  w2Date = Date.now();
  console.log('time sp:', w2Date - w1Date + 'ms');
}

setTimeout(w1, 100);
setTimeout(w2, 200);

function timeLoop(k) {
  var now = Date.now();
  while (Date.now() - now < k) {
    console.log(Date.now() - now)
  }
}
timeLoop(500);