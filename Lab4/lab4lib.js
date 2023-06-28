function currentDate(){
    let result = document.getElementById("current_date")
    let date = new Date()
    function getWeekDay(date) {
        let days = ['неділя', 'понеділок', 'вівторок', 'середа', 'четверг', 'пятниця', 'субота'];

        return days[date.getDay()];
    }
    result.innerText +='Дата: \t' + date.getDate() +' ' + date.getMonth()+ ' ' + date.getFullYear() +' року\n' + 'День:'+' ' +getWeekDay(date) +
        '\n'+'Час:'+ ' ' + date.getHours() + ': ' + date.getMinutes()

}
// Task 02


function current_Day(date) {
    let result2 = document.getElementById('day')
    function days(date) {
        this.dayNumber = +date.getDay()

        this.dayName = function () {
            let days = ['неділя', 'понеділок', 'вівторок', 'середа', 'четверг', 'пятниця', 'субота']

              return days[date.getDay()]

        }
    }
    let examleDay = new days(date)
    result2.innerText += 'Номер дня:' + examleDay.dayNumber + 'Назва дня:' + examleDay.dayName()
}

// Task 03
function daysAgo() {
    let res = document.getElementById('agoResult')
    let daysAgo = document.getElementById('daysAgo').value

    let date = new Date()
    let dateCopy = new  Date(date)
    dateCopy.setDate(date.getDate() - daysAgo)
    res.innerText += dateCopy.toDateString()
        //dateCopy.getFullYear() +'/'+ dateCopy.getMonth() + '/' + dateCopy.getDate()
      //  date.toString() +'__'+ dateCopy.toString()
        //'Місяць' + dateCopy.getMonth() + 'День' + dateCopy.getDay()
}


// Task 04

function lastDay(){
    let month = document.getElementById('enterMonth').value
    let res4 = document.getElementById('lastDay')
    let date = new Date()
    let lastDayofMonth = new Date(date.getFullYear(),+month + 1,0)
    res4.innerText += 'Day:' + lastDayofMonth.getDate() + 'Month:' + lastDayofMonth.getMonth() + 'Year:' + lastDayofMonth.getFullYear()
}

// Task 05

function Seconds(){
    let res4 = document.getElementById('secondsAttAll')
    let d = new Date();



    res4.innerText += 'Всього секунд:'+ d.getHours() * 3600 + d.getMinutes() * 60 + d.getSeconds()

}

// Task 06
function task6(){
    let res6 = document.getElementById('res6')
    let date = document.getElementById('date').value
    let centery = date.slice(0,2)
    let half
    let millenium
    if(date.slice(2,3) <= 5){
        half = 'перша половина'
    }
    else {
        half = 'друга половина'
    }
    if(+centery <= 10 ){
         millenium = 'перше тисячоліття'
    }
    if(+centery > 10 ){
         millenium = 'друге тисячоліття'
    }
    if(+centery >= 20 ){
         millenium = 'третє тисячоліття'
    }

    res6.innerText += 'Сторіччя:' + ((+centery) + 1)+ ', ' + half + ' ,' + millenium


}




// Task 07
function fullYear(){
    let start = document.getElementById('startYear').value
    let end = document.getElementById('endYear').value
    let res7 = document.getElementById('year')

    let n = start.split('.')
    let m = end.split('.')
    let startDate = new Date(n[0], n[1]+1, n[2])
    let endDate = new Date(m[0], m[1]+1, m[2])

    res7.innerText += "Цілих років пройшло:" + (endDate.getFullYear() - startDate.getFullYear() )

}


