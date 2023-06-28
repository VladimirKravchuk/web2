var obj = {
    className: 'open menu menu'
};

function removeClass(obj, cls) {
    let str, myObj = {};
    let arr = [];
    for(let i in obj) {
        str = obj[i];
        console.log(str,' != ', cls);
    }
    arr = str.split(' ');
    console.log('arr = ' + arr);
    for(let i = 0; i < arr.length; i++)
    {
        if (arr[i] == cls) {
            arr.splice(i, 1);
            i--;
        }
    }
    obj.className = arr.join(' ');
    return arr;
}

removeClass(obj, 'menu'); // obj.className='menu'
removeClass(obj, 'blabla'); // без змін (такого класу немає
console.log( obj.className );