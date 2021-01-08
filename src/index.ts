import { User } from "./models/User";

const u1 = new User({ age: 24, name: "kv" });
console.log(u1.get("age"));

u1.set({ name: "amit" });

console.log(u1.get("age"));
