const notes = [12, 5, 17, 9, 20];

// 1. Moyenne
const moyenne = notes.reduce((acc, val) => acc + val, 0) / notes.length;
console.log("Moyenne :", moyenne);

// 2. Tri décroissant
const trie = [...notes].sort((a, b) => b - a);
console.log("Tri décroissant :", trie);

// 3. Filtrer ≥ 10
const admissibles = notes.filter(n => n >= 10);
console.log("Notes ≥ 10 :", admissibles);

