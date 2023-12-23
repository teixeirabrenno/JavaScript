function Contar(){
    const tabuada = document.getElementById('ndigitado').value
    let resultado = document.getElementById('resultado')

    for(let i = 1; i <= 10; i++){
        resultado.innerHTML = resultado.innerHTML + `<p>${tabuada} x ${i} = ${tabuada*i}</p>`
    }
}