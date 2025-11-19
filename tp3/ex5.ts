function add(a: number, b: number): number {
  return a + b;
}

console.log(add(5, 7));
function greet(name: string, age?: number): void{
    if(age){
        console.log(`Hello, my name is ${name} and I am ${age} years old.`);
    }
    else{
        console.log(`Hello, my name is ${name}.`);
    }

}
greet("Rihem",22);
greet("Amri");
function power(base: number, exp: number = 2) :number{
    return base**exp 
}
console.log(power(3));
function combine(a: number, b: number): number;
function combine(a: string, b: string): string;


function combine(a: any, b: any): any {
  return a + b;
}

console.log(combine(5, 10));       
console.log(combine("Hello ", "Rihem")); 