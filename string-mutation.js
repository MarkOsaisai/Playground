let text = "javascript"

const extract = text.slice(0, 4);
const end = text.slice(4, 10);
const anotherText = text.slice(-3);

console.log(extract);
console.log(end);
console.log(anotherText);


const sentence = "My name is mark, My name is mark";
const replaceSentence = sentence.replace("mark", "miesintei");
const newSentence = sentence.replaceAll("mark", "miesintei");
console.log(replaceSentence);
console.log(newSentence);


const fristName = "Mark";
const lastName =  "Osaisai";

console.log(`My name is ${fristName} ${lastName}`);