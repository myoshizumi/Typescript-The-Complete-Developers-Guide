"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var plane = {
    color: "red",
};
Reflect.defineMetadata("note", "hi there", plane, "color");
var note = Reflect.getMetadata("note", plane, "color");
console.log(note);
// Reflect.defineMetadata("note", "hi there", plane);
// Reflect.defineMetadata("height", 10, plane);
// const note = Reflect.getMetadata("note", plane);
// const height = Reflect.getMetadata("height", plane);
// console.log(note);
// console.log(height);
