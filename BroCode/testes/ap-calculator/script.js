mySubmit.onclick = function(){
    let firstTerm = document.getElementById('firstTerm').value
    let numTerm = document.getElementById('numTerm').value
    let ratio = document.getElementById('ratio').value


    firstTerm = Number(firstTerm)
    numTerm = Number(numTerm)
    ratio = Number(ratio)



    const PA = [] 

    if (ratio == 0 || ratio === null || ratio === undefined) {

        window.alert('Enter a valid ratio. Ratio cannot be zero.')
    }   

    else {

        let i = 0

        for(i = firstTerm; PA.length < numTerm; i = i + ratio){
            PA.push(i)

            let myPA = document.getElementById('myPA')

            myPA.textContent = `[${PA.join('; ')}]`


            for (let i = 0; i < PA.length; i++){
                lastTerm = PA[i]

                

                let FSUM = ((firstTerm + lastTerm) * PA.length)/2


                let finiteSum = document.getElementById('finiteSum')

                finiteSum.textContent = `A soma finita dessa PA é igual a ${FSUM}.`
            }
        }     
    }
}

    
    
    
    
