function unique(arr) {
    let myArr = [];
    for (let i of arr) {
        if(!myArr.includes(i)) {
            myArr.push(i);
        }
    }
    return myArr;
}

let strings = ["C++", "C#", "C++", "C#", "C", "C++", "JavaScript", "C++", "JavaScript"];
console.log( unique(strings) ); // C++, C#, C, JavaScript
console.log(strings);