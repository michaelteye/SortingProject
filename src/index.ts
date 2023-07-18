import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
const numbersCollection = new NumbersCollection([70,10,-4,13,99])
const sorter = new Sorter(numbersCollection);  
sorter.sort();
console.log(numbersCollection.data);