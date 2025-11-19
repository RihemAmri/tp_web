var names = "Rihem";
var age = 22;
var isAdmin = true;
var scores = [85, 90, 78, 92];
var student = ["Rihem", 22];
var Role;
(function (Role) {
    Role["User"] = "Rihem";
    Role["Admin"] = "true";
    Role["SuperAdmin"] = "yes";
})(Role || (Role = {}));
console.log('user', Role.User);
