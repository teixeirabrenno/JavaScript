const valores = []

function insereNumero(){
    let input = document.getElementById('ndigitado').value
    
    if (input.length == 0){
        alert('Digite algo.')
        return
    } 
    
    let numero = Number(input)

    if(numero < 1 || numero > 100){
        alert('O número precisa estar entre 1 e 100.')
        return
    }
 
    valores.push(numero)

    let numerosSelecionados = document.getElementById('numerosSelecionados')
    numerosSelecionados.innerHTML = numerosSelecionados.innerHTML + `<p>Número ${numero} adicionado.</p>`
}

function finalizar(){
    let resultado = document.getElementById('resultado')
    valores.sort(function(a, b){return a-b})
    for(let i = 0; i < valores.length; i++){
        maiorTermo = valores[i]
    }
     
    let menorTermo = valores[0]

    resultado.innerHTML = `<p>No total, temos ${valores.length} cadastrados</p>
    <p>O maior termo é ${maiorTermo}</p>
    <p>O menor termo é ${menorTermo}</p>`
    


}










    //     let maiorTermo = 0


//     for(let i = 0; i < valores.length; i++){
//         let numeroAtual = valores[i]
//         let numeroSeguinte = valores[i+1]
      
        
//         if(numeroSeguinte != undefined && numeroAtual > numeroSeguinte){
//             maiorTermo = numeroAtual   
//         }
//         if(maiorTermo < numeroAtual){
//             maiorTermo = numeroAtual 
//         } 
//     }





     
//     let menorTermo = 101

//     for(let j = valores.length - 1; j >= 0; j--){
//         let numeroAtual = valores[j]
//         let numeroSeguinte = valores[j-1]


//         if(numeroSeguinte != undefined && numeroAtual < numeroSeguinte){
//             menorTermo = numeroAtual 
//         }



//         if(menorTermo > numeroAtual){
//             menorTermo = numeroAtual
//         }
        
        

//         console.log(numeroAtual)
//         console.log(menorTermo)
//         console.log(numeroSeguinte)
//         console.log('')


//     }


//     resultado.innerHTML = `<p>No total, temos ${valores.length} cadastrados</p>
//     <p>O maior termo é ${maiorTermo}</p>
//     <p>O menor termo é ${menorTermo}</p>`


    
// }

