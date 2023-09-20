
let arr = ["xojik", "aziza", "safir", "samira"]

let len = arr.length

let index = prompt('which student you want to remove?')


arr.splice(index, 1)

let len2 = arr.length 
if (len2 == len) {
    alert('Not found')
}

console.log(arr);