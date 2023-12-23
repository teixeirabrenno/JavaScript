function Contar(){
    let termo1 = document.getElementById('txtInicio')
    let termoN = document.getElementById('txtFim')
    let razao = document.getElementById('txtRazao')
    let resultado = document.getElementById('resultado')

   
    if (termo1.value.length == 0 || termoN.value.length == 0 || razao.value.length == 0 || razao.value == 0) {
       window.alert('Os dados estão preenchidos de forma inadequada.')
     } else {
        resultado.innerText = 'P.A.: '
        let a1 = Number(termo1.value)
        let an = Number(termoN.value)
        let r = Number(razao.value)
        
        if (a1 < an){
            for(a1; a1 <= an; a1 = a1 + r){
                resultado.innerText += ` ${a1} \u{27A1}`
            }
        } else {
            for(a1; a1 >= an; a1 = a1 - r){
                resultado.innerText += ` ${a1} \u{27A1}`
            }
        }
        
        }
    
        }
     




    




    // for(a1; a1 <= an; a1 = a1 + r){
    //     resultado.innerHTML = resultado.innerHTML + `<p>${a1}</p>`
    // }