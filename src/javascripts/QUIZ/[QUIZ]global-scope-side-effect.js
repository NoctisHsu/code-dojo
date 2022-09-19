var say = function () {
  console.log(name);
  if (typeof name === "undefined") {
    var name = "xng";
    console.log("Goodbye, " + this.name);
  } else {
    console.log("Hello, " + name);
  }
}
var name = "Dan";
class Student {
	constructor() {
		var name = 'Jack';
		this.name = 'stark';
		console.log(name);
	}
	say = say
}
var s = new Student();
s.say();
say();
