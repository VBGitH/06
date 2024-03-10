
let licence = {
    name:'IVANOV',
    name1: 'IVAN IVANOVICH',
    dates: [
        '26.11.2020',
        '26.11.2030',
    ],
    number: '1000-50000',
    category: 'B, C',
    photo: 'photo.jpg'
}

let btnLoad = document.getElementById('btnLoad')
let rowCard = document.getElementById('rowCard')
let topCard = document.getElementById('top')

btnLoad.onclick = function(){
    let imgPhoto = document.getElementById('photo')
    imgPhoto.src = licence.photo

    wrkStr = ''
    for(var k = 1; k < 6; k++){
        wrkStr += `<br>`    
    }
    topCard.innerHTML = wrkStr

    wrkStr = `<div class="lbl">1. ${licence.name}<br>`
    wrkStr += `2. ${licence.name1}<br>`
    wrkStr += `3. `

    for(const wrk of licence.dates){
        wrkStr += `${wrk} `   
    }
    wrkStr += `<br>`

    wrkStr += `4. ${licence.number}<br>`
    wrkStr += `5. ${licence.category}<br>`
    wrkStr += `</div>`
     
    rowCard.innerHTML = wrkStr
}