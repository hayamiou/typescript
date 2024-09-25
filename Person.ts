// Déclaration de la classe Person
class Person {
  name: string;
  age: number;

  // Constructeur qui initialise les attributs name et age
  constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
  }

  // Méthode pour afficher le nom
  tellMyName(): void {
      console.log(`I am ${this.name}`);
  }

  // Méthode pour afficher l'âge
  tellMyAge(): void {
      console.log(`I am ${this.age} years old`);
  }
}

// Instanciation de deux objets Person avec des valeurs différentes
const person1 = new Person('John', 40);
const person2 = new Person('Mary', 35);

// Appel des méthodes tellMyName et tellMyAge sur person1
person1.tellMyName(); // I am John
person1.tellMyAge();  // I am 40 years old

// Appel des méthodes tellMyName et tellMyAge sur person2
person2.tellMyName(); // I am Mary
person2.tellMyAge();  // I am 35 years old
