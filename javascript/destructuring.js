// const colors = { colorone: "yellow", colortwo: "red",  }


// const greetUser = ({name, role}) =>{
//     return `Hello ${name} ${role}`
// }
//     console.log({ role: "Designer", name: "James"})


//     const arr = [1,2,3,4,5];
//     const arrSet = new Set(arr);
//     console.log(arrSet)

// const timeOutRef = setTimeout((arg) =>{
//     console.log(`welcome back ${arg}`)
//        clearTimeout(timeOutRef) 
// }, 6000, "samuel")


let count = 0;
const maxCount = 5;
const interval = setInterval(()=>{
    console.log(`Number of executiona: ${count}`)
    count++

    if (count === maxCount){
        clearInterval(interval)

    }

}, 2000);