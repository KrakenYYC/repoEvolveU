console.log("Hello Marvelous World");

class Living extends Object {
	constructor(age, name, mother, father, kid) {
		super();
		this.age = age;
		this.name = name;
		this.mother = mother;
		this.father = father;
		this.kid = kid;
	}

	show() {
		console.log("this is the show function", this.age);
	}

	walk(param) {
		console.log("this is the walk function", this.age * param);
	}

	birthday() {
		this.age = this.age + 1;
	}
}

// let j = new Living(3);
// console.log("jjj", j);
// console.log("j's age", j.age);
// j.show();
// j.walk(5);
// j.birthday();
// j.show();
// j.birthday();
// j.show();

// let m = new Living(9);
// console.log("mmm", m);
// console.log("m's age", m.age);
// m.show();
// m.walk(9);
// m.birthday();
// m.show();
// m.birthday();
// m.show();

// let y = new Living(100);
// console.log("yyy", y);
// console.log("y's age", y.age);
// y.show();
// y.walk(4);
// y.birthday();
// y.birthday();
// y.birthday();
// y.birthday();
// y.show();

// console.log("start new with show")
// j.show();
// m.show();
// y.show();
// console.log("start new with walk")
// j.walk(2);
// m.walk(2);
// y.walk(2);

class Animal extends Living {
	constructor(age, mother, name) {
		super(age, mother, name);
	}
	show() {
		console.log("name", this.name, "age", this.age, "mother", this.mother);
	}
}

console.log("new animal dog under living");
let dog = new Animal(14, "marvin");
dog.show();

let cat = new Animal(3, "niko");
cat.show();

console.log("new Living person under Object");

let carrie = new Living(22, "carly", "maude");
// carrie.show();

console.log("this is new", carrie);

console.log("new Strange under Living");
class Strange extends Living {}
let psycho = new Strange(19);
psycho.show();
