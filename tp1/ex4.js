const tab1=[1,2,3];
const tab2=[4,5,6];
const fusion=[...tab1,...tab2];
//etaler
console.log(fusion);



// Copie d’un objet
const obj1 = { x: 1, y: 2 };
const obj2 = { ...obj1, y: 10 }; // copie puis modif
console.log(obj2); // {x: 1, y: 10}

