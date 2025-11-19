interface User {
  id: number;
  name: string;
  email?: string;
  readonly isAdmin: boolean;
}
const user1: User = {
  id: 1,
  name: "Rihem",
  email: "amririhem19@example.com",
  isAdmin: false
};

interface Admin extends User {
  permissions: string[];
}
const admin1: Admin = {
  id: 2,
  name: "Admin",
  isAdmin: true,
  permissions: ["read", "write", "delete"]
};

console.log(user1);
console.log(admin1);
