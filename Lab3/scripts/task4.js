function filterRangeInPlace(arr, a, b) {
    for(let i = 0; i < arr.length; i++) {
        if(a > arr[i] || arr[i] > b)
        {
            arr.splice(i, 1);
        }
    }
}

arr = [5, 3, 8, 1];
filterRangeInPlace(arr, 1, 4);

alert( arr ); // заливаються [3, 1]