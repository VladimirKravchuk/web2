function toCamelCase(){
    let text1 = document.getElementById("textSnakeCase1").value

    text1 = text1.split('_')


    let result1 = document.getElementById("textLowerCamelCase1")


    if(text1.length > 1 ) {
        for (let i =1; i <= text1.length; i++){
            result1.value = text1.splice(i, 1, text1[1].charAt(0).toUpperCase() + text1[i].slice(1))
            result1.value = text1.join('')
        }
    }
    else {
        result1.value = text1

    }
}