function arraySort(mas) {
    let myArr = [];
    for(let i of mas) {
        myArr.push(i);
    }
    return myArr.sort();
}

var arr = ["HTML", "JavaScript", "CSS"];
console.log(arr);
let arrSorted = arraySort(arr);
console.log(arrSorted); // CSS, HTML, JavaScript
console.log(arr); // HTML, JavaScript, CSS