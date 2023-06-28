function ArrObjSort(arr) {
    arr.sort(compareNumber);
}
function compareNumber(a, b) {
    if(a.age > b.age) return 1;
    if(a.age < b.age) return -1;
}

var vasya = { name: "Вася", age: 23 };
var masha = { name: "Маша", age: 18 };
var vovochka = { name: "Вовочка", age: 6 };
var people = [ vasya , masha , vovochka ];
ArrObjSort(people);
let res = (vasya.age + masha.age + vovochka.age) / 3; // сер.знач

console.log('res ' + res);
console.log(people[0].age); // 6
console.log(people[1].age);
console.log(people[2].age);