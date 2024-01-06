function verificar(){
    let data = new Date()
    let anoAtual = data.getFullYear()
    let inputAno = document.getElementById('txtano')
    let idade = anoAtual - Number(inputAno.value)
    let resultado = document.getElementById('resultado')

    if (inputAno.value.length != 4 || inputAno.value > anoAtual) {
        alert('Verifique as informações e tente novamente.')
    } else {
        let sex = document.getElementsByName('sex')
        var genero = ''
        let foto = document.getElementById('foto')

        if (sex[0].checked) {
            genero = 'homem'
            if (idade >= 0 && idade < 13) {
                foto.setAttribute('src', 'criancaMasculino.png')
            } else if (idade < 21) {
                foto.setAttribute('src', 'jovemMasculino.png')
            } else if (idade < 60) {
                foto.setAttribute('src', 'adultoMasculino.png')
            } else {
                foto.setAttribute('src', 'idosoMasculino.png')
            }

        } else if (sex[1].checked){
            genero = 'mulher'
            if (idade >= 0 && idade < 13) {
                foto.setAttribute('src', 'criancaFeminino.png')
            } else if (idade < 21) {
                foto.setAttribute('src', 'jovemFeminino.png')
            } else if (idade < 60) {
                foto.setAttribute('src', 'adultoFeminino.png')
            } else {
                foto.setAttribute('src', 'idosoFeminino.png')
            }
        }

        
        resultado.style.textAlign = 'center'
        resultado.innerText = `Você é ${genero} com ${idade} anos.`
        resultado.appendChild(foto)

    }
    


}
