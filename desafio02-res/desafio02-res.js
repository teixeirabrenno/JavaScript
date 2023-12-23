function verificar(){
    let data = new Date()
    let dataAno = data.getFullYear()
    let ano = document.getElementById('year').value
    let txtimg = document.getElementById('txtimg')
    let idade = dataAno - ano

    if (ano.length != 4 || ano > dataAno){
        window.alert('Verifique se os dados estão corretos.')
    } else {
        let foto = document.getElementById('foto')
        let sex = document.getElementsByName('sex')
        let genero = ''
        if (sex[0].checked) {
            genero = 'homem'
            if (idade >= 0 && idade < 13){
                //criança
                foto.setAttribute('src', 'criancaMasculino.png')
            } else if (idade < 21) {
                //jovem
                foto.setAttribute('src', 'jovemMasculino.png')
            } else if (idade < 60) {
                //adulto
                foto.setAttribute('src', 'adultoMasculino.png')
            } else {
                //idoso
                foto.setAttribute('src', 'idosoMasculino.png')
            }
        } else if (sex[1].checked) {
            genero = 'mulher'
            if (idade >= 0 && idade < 13){
                //criança
                foto.setAttribute('src', 'criancaFeminino.png')
            } else if (idade < 21) {
                //jovem
                foto.setAttribute('src', 'jovemFeminino.png')
            } else if (idade < 60) {
                //adulto
                foto.setAttribute('src', 'adultoFeminino.png')
            } else {
                //idoso
                foto.setAttribute('src', 'idosoFeminino.png')
            }
        }
        txtimg.innerText = `Você é ${genero} com ${idade} anos.`
        txtimg.style.textAlign = 'center'
        txtimg.appendChild(foto)
        
    }
    
    
}
