const myNumbers = [1, 2, 3, 4, 5, 6];

const myEvenNumbers = myNumbers.filter(num => num % 2===0);
console.log(myEvenNumbers);



// const mySets = [1, 2, 3, 4, 5, 6];

// const mySet = mySets.reduce((acc, curr) => acc + curr, 0);

// const myHighest = mySets.reduce((acc, curr))

// console.log(mySet);



const myActive = [ 2, 3, 4, 5, 6];

const myActiveClone = myActive.slice();
console.log(myActive)
console.log(myActiveClone)