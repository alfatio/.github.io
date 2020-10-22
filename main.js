let rng1 = Math.ceil(Math.random()*83)
let rng2 = Math.ceil(Math.random()*66)
let fungsi = ['*', '+','-','/']
let i = Math.random()
let iFungsi = Math.floor(i*fungsi.length)
let operator = fungsi[iFungsi]
let counter = 0
function cariHasil(rng1,rng2,operator){
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
    document.getElementById(button).innerText = cariHasil(rng1,rng2,operator)
    document.getElementById(button).className = 'btn-benar'
    //document.getElementById(button).onclick = cekJwb()
    
}
// console.log(kasihJawaban())
function keluarSoal(){
    document.getElementById("soalMath").innerText = `${rng1} ${operator} ${rng2} ?`
}
function kasihJawabanLain(){
    let jawaban = cariHasil(rng1,rng2,operator)
    let koma = 0
    if(jawaban != Math.floor(jawaban)){
        koma =2
    }
    for(let j = 1; j < 5; j++ ){
        if(document.getElementById("jwb"+j).innerText != jawaban ) {
            //console.log('masuk')
            if((Math.random()*100).toFixed() %2 == 0){
                document.getElementById("jwb"+j).innerText = (jawaban + (Math.random()+0.1)*10).toFixed(koma)
                document.getElementById("jwb"+j).className = 'btn-salah'
                //document.getElementById("jwb"+j).onclick = cekJwb('salah')
            }else{
                document.getElementById("jwb"+j).innerText = (jawaban - (Math.random()+0.1)*10).toFixed(koma)
                document.getElementById("jwb"+j).className = 'btn-salah'
                //document.getElementById("jwb"+j).onclick = cekJwb('salah')
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
    rng1 = Math.ceil(Math.random()*83)
    rng2 = Math.ceil(Math.random()*66)
    fungsi = ['*', '+','-','/']
    i = Math.random()
    iFungsi = Math.floor(i*fungsi.length)
    operator = fungsi[iFungsi]
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