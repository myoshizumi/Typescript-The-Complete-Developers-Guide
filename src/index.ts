import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";

// const numbersCollection = new NumbersCollection([10, 30, -5, 110]);
// const sorter = new Sorter(numbersCollection);
// sorter.sort();
// console.log(numbersCollection);

const charactersCollection = new CharactersCollection("iHPkdf");

const sorter = new Sorter(charactersCollection);
sorter.sort();
console.log(charactersCollection);
