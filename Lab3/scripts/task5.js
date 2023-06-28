function reverseSort(arr, compareNumber) {
    //arr.sort(compareNumber);
}
function compareNumber(a, b) {
    if(a < b) return 1;
    if(a > b) return -1;
}

let arr = [5, 2, 1, -10, 8];
reverseSort( arr );

alert( arr ); // 8, 5, 2, 1, -10