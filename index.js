class Person {
  constructor(firstName, secondName, age) {
    this.firstName = firstName;
    this.secondName = secondName;
    this.age = age;
  }
  
  getMainInfo() {
    console.log(`
      name: ${this.firstName}
      surname: ${this.secondName}
      age: ${this.age}
    `);
  }

  changeName(newFirstname, newSenodName = this.secondName) {
    this.firstName = newFirstname
    this.secondName = newSenodName
  }
}

class Famale extends Person {
  constructor(firstName, secondName, age, boobsSize) {
    super(firstName, secondName, age)
    this.boobsSize = boobsSize
  }
  getRaplic() {console.log('women also have rights!!!');}
}

class Male extends Person {
  getRaplic() {console.log('Job is a meaning of life');}
}

class MedSister extends Famale {
  enlargeBreasts(addSize) {
    this.boobsSize += addSize
  } 
}

class Employee extends Male {
  constructor(firstName, secondName, age, salary, job = '') {
    super(firstName, secondName, age)
    this.salary = salary
    this.job = job
  }

  increaseSalary(addedSalary) {
    this.salary += addedSalary
  }

  getNewJobs(newJob) {
    this.job = newJob
  }
}

let bob = new Person('Bob', 'Smit', '32')
let alice = new Famale('Alice','Musk', 24, 42)
console.log(
  JSON.stringify(alice)
);

alice.getMainInfo()
alice.getRaplic()

let kate = new MedSister('Kate', 'Brown', 19, 12)
//hello
