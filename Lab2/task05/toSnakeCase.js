function toSnakeCase(){
    let text1 = document.getElementById("textCamelCase1").value


    text1 = text1.split(/([A-Z])/)


    let result1 = document.getElementById("textLowerSnakeCase1")


    if(text1.length > 1) {
        result1.value = text1.join('_').toLowerCase()

    }
    else{
        result1.value = text1.join('').toLowerCase()
    }
}