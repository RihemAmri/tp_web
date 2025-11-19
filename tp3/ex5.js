function add(a, b) {
    return a + b;
}
console.log(add(5, 7));
function greet(name, age) {
    if (age) {
        console.log("Hello, my name is ".concat(name, " and I am ").concat(age, " years old."));
    }
    else {
        console.log("Hello, my name is ".concat(name, "."));
    }
}
greet("Rihem", 22);
greet("Amri");
