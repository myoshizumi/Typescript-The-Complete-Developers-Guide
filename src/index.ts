import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";

const numbersCollection = new NumbersCollection([10, 30, -5, 110]);
const sorter = new Sorter(numbersCollection);

sorter.sort();
console.log(numbersCollection);
