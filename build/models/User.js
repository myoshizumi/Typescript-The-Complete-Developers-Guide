"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(data) {
        this.data = data;
    }
    get(propName) {
        return this.data[propName];
    }
}
exports.User = User;
