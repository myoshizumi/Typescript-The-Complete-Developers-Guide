"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = require("./models/User");
const user = new User_1.User({ name: "myname", age: 20 });
user.on("change", () => {
    console.log("Change #1");
});
user.on("save", () => {
    console.log("Save #1");
});
user.trigger("save");
