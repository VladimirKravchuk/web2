let text =  document.getElementById("text")
let result = document.getElementById("result")
let button = document.getElementById("button")
button.addEventListener("click" , function(){
    result.value = Rewrite(text.value)

})

function Rewrite(userText){
    let data = userText.match(/\b(\d+)\/(0[1-9]|10|11|12)\/(0\d|[1-2][0-9]|3[0-1])\b/g)

    for (let i = 0; i < data.length; i++){
        data[i] = data[i].split('/')
        let part = data[i][0]
        data[i][0] = data[i][2]
        data[i][2] = part
        data[i] = data[i].join('.')
    }
    data = data.join('  ')
    return data
}