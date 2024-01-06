function carregar(){
    let box = document.getElementById('box')
    let body = document.getElementById('corpo')
    let mensagem = document.getElementById('mainInfo')
    let imagem = document.getElementById('image')
    let hoje = new Date()
    let horaAtual = hoje.getHours()
    let minAtual = hoje.getMinutes()
    mensagem.innerText = `Agora são ${horaAtual}:${minAtual} horas.`
    
    

    if (horaAtual >= 4 && horaAtual < 8) {
        mensagem.innerText = `Bom dia! Agora são ${horaAtual}:${minAtual} horas.`
        imagem.setAttribute("src","dawnsky250.png")
        body.style.backgroundColor = '#ED955B'
        box.style.backgroundColor = '#FFFFFF'
    }

    if (horaAtual >= 8 && horaAtual <= 17) {
        mensagem.innerText = `Boa tarde! Agora são ${horaAtual}:${minAtual} horas.`
        imagem.setAttribute("src","noonsky250.png")
        body.style.backgroundColor = '#568CCA'
        box.style.backgroundColor = '#FFFFFF'
    }

     if (horaAtual > 17  || horaAtual < 4) {
        mensagem.innerText = `Boa noite! Agora são ${horaAtual}:${minAtual} horas.`
        imagem.setAttribute("src","nightsky250.png")
        body.style.backgroundColor = '#7D6D6F'
        box.style.backgroundColor = '#FFFFFF'
        
    }

        
    
    
    
}
    
