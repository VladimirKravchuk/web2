var obj = {
    className: 'open menu'
};

function addClass(obj, cls) {
    let str;
    let myObj = {};
    let arr = [];
    //робимо строку з обєкта
    for(let i in obj) {
        str = obj[i];
    }
    console.log(str);
    //розбиваємо на масив
    arr = str.split(' ');
    console.log(arr);
    // заносимо елементи в обєкт.
    for(let i = 0; i < arr.length; i++){
        myObj[arr[i]] = true;
    }
    console.log(myObj);
    // якщо класу немає то занесемо туди текст
    myObj[cls] = true;
    // отримуємо з объекта, масив.
    arr = Object.keys(myObj);
    console.log(arr);
    //перетворюємо масив в строку з розділенням за допомогою пробілу.
    str = arr.join(" ");
    for(let i in obj){
        obj[i] = str;
    }
    return obj;
}

addClass(obj, 'new'); // obj.className='open menu new'
addClass(obj, 'open'); // без змін (клас вже існує)
addClass(obj, 'me'); // obj.className='open menu new me'

alert( obj.className ); // "open menu new me"