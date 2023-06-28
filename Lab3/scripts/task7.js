function RandSort() {
let st = 0.5 - Math.random();
console.log('st' + st);
return st;
}

var arr = [1, 2, 3, 4, 5];
arr.sort(RandSort);
alert( arr ); // елементи у випадковому порядку, наприклад [3,5,1,2,4]