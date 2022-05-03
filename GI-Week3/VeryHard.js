class Person {
	constructor(name, age, job){
  this.name=name;
  this.age=age;
  this.job=job
  }
  exercise(){
  	console.log("Any random text can go here");
  }
  fetchJob(){
  	console.log(`${this.name} is a ${this.job}`)
  }
}
let person1 = new Person("Stan", 27, "Farmer")
person1.exercise();
person1.fetchJob();
