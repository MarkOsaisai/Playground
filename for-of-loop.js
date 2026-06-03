
const table = [
["two", "three", "four"], 
["five", "six", "seven"], 
];
for (const outer of table){
   for (const inner of outer){
     console.log(inner);
   }
}
