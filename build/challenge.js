"use strict";
// challenge.ts
// Fonction avec typage du paramètre users comme un tableau d'objets User
const prettyPrintWilder = (users) => {
    users.map((user) => {
        if (user.age) {
            console.log(`${user.name} is ${user.age} years old`);
        }
        else if (user.birthday) {
            console.log(`${user.name} was born on ${user.birthday}`);
        }
    });
};
// Tableau de wilders typé comme un tableau d'objets User
const wilders = [];
// Déclaration des utilisateurs avec le typage correct
const user1 = { name: "Pierre", age: 23 };
const user2 = { name: "Paul", birthday: "10/02/1990" };
const user3 = { name: "Jacques", age: 25 };
// Ajout des utilisateurs au tableau wilders
wilders.push(user1);
wilders.push(user2);
wilders.push(user3);
// Appel de la fonction prettyPrintWilder
prettyPrintWilder(wilders);
