const user = {
  name: "Changuk",
  age: 26,
  emails: ["dnr8874@naver.com"],
};

const copyUser = { ...user };
console.log(copyUser === user);

user.age = 22;
console.log("user", user);
console.log("copyUser", copyUser);

console.log("------");
console.log("------");

user.emails.push("hello@gmail.com");
console.log(user.emails === copyUser.emails);
console.log("user", user.emails);
console.log("copyUser", copyUser.emails);
