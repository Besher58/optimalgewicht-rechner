let a=document.getElementById('groeße')
let b=document.getElementById('alter')
let c=document.getElementById('breite')
let d=document.getElementById('schmale')


function rech(){
    if(c.checked==true){
      document.getElementById('resu').innerHTML= ([(a.value - 100) + (b.value/ 10)] * 0.9 * 0.9).toFixed(2)
    }else {
        document.getElementById('resu').innerHTML= ([(a.value - 100) + (b.value/ 10)] * 0.9 * 1.1).toFixed(2)
    }
}