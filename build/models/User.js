"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(data) {
        this.data = data;
        this.events = {};
    }
    get(propName) {
        return this.data[propName];
    }
    set(update) {
        Object.assign(this.data, update);
    }
    on(eventName, callback) {
        const handlers = this.events[eventName] || []; // Callback[] or undefined
        handlers.push(callback);
        this.events[eventName] = handlers;
    }
}
exports.User = User;
