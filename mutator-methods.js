const months = ["jan", "feb", "march", "april"];
months.splice(0, 2, "aug", "sep", "oct");

console.log(months)



const arr = [1, 2, 3, 4, 5];
arr.reverse();
console.log(arr)

arr.fill(0);
console.log(arr)

arr.fill("Levels", 0, 3);
console.log(arr)



const arr2 = [6, 8, 3, 9, 5];
arr2.sort();
console.log(arr2);

arr2.sort(function(a, b){
    return b-a;
})
console.log(arr2);


// alpha.sort();
// console.log(alpha);

const alpha = ["B", "D", "E", "C"];
const beta = [2, 100, 47, 58, 12 ];

beta.sort((a, b) => b-a);
function wayUp(b-a, beta.sort){
console.log(beta)
}
console.log(beta)

alpha.sort();
console.log(alpha);

alpha.sort((a, b) => b.localeCompare(a));
console.log(alpha)


const names = ["Éric", "Alice", "Bob"];

names.sort((a, b) => a.localeCompare(b));

console.log(names);