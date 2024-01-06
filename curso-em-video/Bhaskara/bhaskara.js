function calcular(){
    let A = Number(document.getElementById('inputA').value)
    let B = Number(document.getElementById('inputB').value)
    let C = Number(document.getElementById('inputC').value)
    let Delta = ((B*B) - (4*A*C))
    let raizDelta = Math.sqrt(Delta)
    let x1 = ((-B + raizDelta)/(2*A))
    let x2 = ((-B - raizDelta)/(2*A))

    showDelta.textContent = `Delta = ${Delta}`
    showRoots.textContent = `As raízes são ${(x1)} e ${(x2)}`

}



