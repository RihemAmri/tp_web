let id:Number|string;
type A = {
  name: string;
};

type B = {
  age: number;
};

type Person = A & B;

const etudiant: Person = {
  name: "Rihem",
  age: 22
};
type Status = "pending" | "done" | "canceled";
let unknown: unknown = "Rihem";
let l = (unknown as string).length;

console.log(l);