document.getElementById('generateTable').addEventListener("click", function (){
    let textArea = document.getElementById("textarea").value
    let RegExpTr = /[A-z]+\s[A-z]+\n[A-z]+\n\d{2,3}\s\w+\s\w+\s?\w+\n\w+\.?\s?\w+\s?\,\s[A-Z]{2}\s\d+\n\d+\-\d+\-\d+\n\w+\n\w*\W?\w*\n\w+\@\w+\.\w+/gm

    let RegExpTd = /(\w*).(\w*)\s(Female|Male)\s(\d*[\s\w*]*, \w{2} \d{5})\s(\d{2}-\d{2}-\d{4})\s(\w+)\s([\w$@!&%]+)\s([a-z_\d\.]+@[a-z\d]+(?:\.[a-z\d]+)+)/gm

    let Parts = textArea.match(RegExpTr)

    let table = document.createElement("table")

    let thead = document.createElement('thead')

    let tbody = document.createElement('tbody')
    let tableHeaders = ['FirstName', 'LastName', 'Gender', 'Address', 'BirthDate', 'NickName', 'Password', 'E-mail']
let tr

    function createHeaderTable() {
        for (let i = 0; i < 1; i++) {
            tr = document.createElement("tr")
            for (let j = 0; j < 8; j++) {
                let th = document.createElement("th")
                th.innerText = tableHeaders[j]
                tr.appendChild(th)

            }
            thead.appendChild(tr)
        }
    }
    function  createBodyTable(){
        for (let i = 0; i < Parts.length; i++){
            tr = document.createElement("tr")
            let partsOfParts = Parts[i].split(RegExpTd)

            for (let j =0; j < partsOfParts.length; j++){
                let td = document.createElement("td")
                td.innerText = partsOfParts[j]
                tr.appendChild(td)

            }
        tbody.appendChild(tr)
        }

    }

    table.appendChild(thead)

    table.appendChild(tbody)
    createHeaderTable()

    createBodyTable()

    document.getElementById("info").appendChild(table)

})

