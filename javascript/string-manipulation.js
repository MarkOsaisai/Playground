// // const string1 = "cat"
// // console.log("cat" .charAt(0));

// const name = "world";
// console.log(`Hello, ${name}!`);

// const calc = 2 + 2;
// console.log(calc);
// calc === 4;
// console.log(calc ===4);
// console.log(typeof calc);

// const calc2 = `${2+2}`;
// console.log(calc2);
// console.log(calc2 ==="4");
// console.log(typeof calc2);

const but = Math.floor(Math.random() * 100) + 1;
console.log(but);

const array = new Uint32Array(3);
crypto.getRandomValues(array);  // much more secure/unpredictable
console.log(array[2]);