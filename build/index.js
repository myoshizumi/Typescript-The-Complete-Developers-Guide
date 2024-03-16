"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = require("./models/User");
const user = new User_1.User({ name: "myname", age: 20 });
user.set({ name: "new name", age: 999 });
console.log(user.get("name"));
console.log(user.get("age"));
