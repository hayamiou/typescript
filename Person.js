// Déclaration de la classe Person
var Person = /** @class */ (function () {
    // Constructeur qui initialise les attributs name et age
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    // Méthode pour afficher le nom
    Person.prototype.tellMyName = function () {
        console.log("I am ".concat(this.name));
    };
    // Méthode pour afficher l'âge
    Person.prototype.tellMyAge = function () {
        console.log("I am ".concat(this.age, " years old"));
    };
    return Person;
}());
// Instanciation de deux objets Person avec des valeurs différentes
var person1 = new Person('John', 40);
var person2 = new Person('Mary', 35);
// Appel des méthodes tellMyName et tellMyAge sur person1
person1.tellMyName(); // I am John
person1.tellMyAge(); // I am 40 years old
// Appel des méthodes tellMyName et tellMyAge sur person2
person2.tellMyName(); // I am Mary
person2.tellMyAge(); // I am 35 years old
