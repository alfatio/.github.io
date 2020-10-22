
let rng1 = Math.ceil(Math.random()*18)
let rng2 = Math.ceil(Math.random()*6)
let rng3 = Math.ceil(Math.random()*7)
let fungsi = ['*', '+','-','/']
let i = Math.random()
let i2 = Math.random()
let iFungsi = Math.floor(i*fungsi.length)
let operator = fungsi[iFungsi]
let iFungsi2 = Math.floor(i2*fungsi.length)
let operator2 = fungsi[iFungsi2]
let counter = 0
function cariHasil(rng1,rng2,rng3,operator,operator2){
    let hasil = 0
    switch(operator){
        case '*':
            hasil = rng1*rng2
            break;
        case '+':
            hasil = rng1+rng2
            break;
        case '-':
            hasil = rng1-rng2
            break;
        case '/':
            hasil = rng1/rng2
            break;
    }
    switch(operator2){
        case '*':
            hasil = hasil*rng3
            break;
        case '+':
            hasil = hasil+rng3
            break;
        case '-':
            hasil = hasil-rng3
            break;
        case '/':
            hasil = hasil/rng3
            break;
    }
    return Number(hasil.toFixed(2))
}
// console.log(cariHasil(rng1,rng2,operator))

function showHide(game){
    var x = document.getElementById(game);
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
    
}
function showHide2(game){
    var x = document.getElementById(game);
    if (x.className == "hidden") {
      x.className = "";
    } else {
      x.className = "hidden";
    }
    
}

function randomJwb(){
    let a = Math.ceil(Math.random()*4)
    if(a === 0){
        a = 1
    }
    return `jwb${a}`
}
function kasihJawaban(){
    let button = randomJwb()
    document.getElementById(button).innerText = cariHasil(rng1,rng2,rng3,operator,operator2)
    document.getElementById(button).className = 'btn-benar'
    //document.getElementById(button).onclick = cekJwb()
    
}
// console.log(kasihJawaban())
function keluarSoal(){
    document.getElementById("soalMath").innerText = `(${rng1} ${operator} ${rng2}) ${operator2} ${rng3}?`
}
function kasihJawabanLain(){
    let jawaban = cariHasil(rng1,rng2,rng3,operator,operator2)
    let koma = 0
    if(jawaban != Math.floor(jawaban)){
        koma =2
    }
    for(let j = 1; j < 5; j++ ){
        if(document.getElementById("jwb"+j).innerText != jawaban ) {
            if((Math.random()*100).toFixed() %2 == 0){
                if(jawaban%5 == 0){
                    document.getElementById("jwb"+j).innerText = (jawaban + (j*10)).toFixed(koma)
                    document.getElementById("jwb"+j).className = 'btn-salah'
                }else{
                    document.getElementById("jwb"+j).innerText = (jawaban + (Math.random()+0.1)*15).toFixed(koma)
                    document.getElementById("jwb"+j).className = 'btn-salah'
                }                
            }else{
                if(jawaban%5 == 0){
                    document.getElementById("jwb"+j).innerText = (jawaban - (j*10)).toFixed(koma)
                    document.getElementById("jwb"+j).className = 'btn-salah'
                }else{
                    document.getElementById("jwb"+j).innerText = (jawaban - (Math.random()+0.1)*10).toFixed(koma)
                    document.getElementById("jwb"+j).className = 'btn-salah'
                }
                
            }
                            
        }
    }    
   
    
    
}

function quiz(){
    keluarSoal()
    kasihJawaban()
    kasihJawabanLain()
}
function quiz2(){
    rng1 = Math.ceil(Math.random()*18)
    rng2 = Math.ceil(Math.random()*6)
    rng3 = Math.ceil(Math.random()*7)
    fungsi = ['*', '+','-','/']
    i = Math.random()
    i2 = Math.random()
    iFungsi = Math.floor(i*fungsi.length)
    operator = fungsi[iFungsi]
    iFungsi2 = Math.floor(i2*fungsi.length)
    operator2 = fungsi[iFungsi2]
    keluarSoal()
    kasihJawaban()
    kasihJawabanLain()
}

function cekJwb(str){
    let idJawaban = document.getElementById(str);
    if(idJawaban.className == 'btn-salah'){
        document.getElementById('countSalah').innerText = Number(document.getElementById('countSalah').innerText) + 1
        quiz2()
    }else{
        document.getElementById('countBenar').innerText = Number(document.getElementById('countBenar').innerText) + 1
        quiz2()
    }
}