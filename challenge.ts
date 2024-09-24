// challenge.ts

// Déclaration de l'interface User
interface User {
  name: string;
  age?: number; // age est optionnel
  birthday?: string; // Ajout de la propriété birthday
}

// Fonction avec typage du paramètre users comme un tableau d'objets User
const prettyPrintWilder = (users: User[]): void => {
  users.map((user) => {
    if (user.age) {
      console.log(`${user.name} is ${user.age} years old`);
    } else if (user.birthday) {
      console.log(`${user.name} was born on ${user.birthday}`);
    }
  });
};

// Tableau de wilders typé comme un tableau d'objets User
const wilders: User[] = [];

// Déclaration des utilisateurs avec le typage correct
const user1: User = { name: "Pierre", age: 23 };
const user2: User = { name: "Paul", birthday: "10/02/1990" };
const user3: User = { name: "Jacques", age: 25 };

// Ajout des utilisateurs au tableau wilders
wilders.push(user1);
wilders.push(user2);
wilders.push(user3);

// Appel de la fonction prettyPrintWilder
prettyPrintWilder(wilders);
