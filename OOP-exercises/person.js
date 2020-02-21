class Person {
    constructor(name, email, phone) {
        this.name = name;
        this.email = email;
        this.phone = phone;
    }
    greet(otherPerson) {
      console.log('Hello ' + otherPerson.name + ', I am ' + this.name + '!');
    }
  }


// 1) Instantiate an instance object of Person with name of 'Sonny', email of 'sonny@hotmail.com', and phone of '483-485-4948', store it in the variable sonny.
let sonny = new Person('Sonny', 'sonny@hotmail', '483-485-4948');
console.log(sonny)

// 2) Instantiate another person with the name of 'Jordan', email of 'jordan@aol.com', and phone of '495-586-3456', store it in the variable 'jordan'.
let jordan = new Person('Jordan', 'jordan@aol.com', '495-586-3456');
console.log(jordan);

// 3) Have sonny greet jordan using the greet method.
sonny.greet(jordan);

// 4) Have jordan greet sonny using the greet method.
jordan.greet(sonny);

// 5) Write a statement to print the contact info (email and phone) of Sonny.
console.log(sonny.email, sonny.phone);

// 6) Write another statement to print the contact info of Jordan.
console.log(jordan);
