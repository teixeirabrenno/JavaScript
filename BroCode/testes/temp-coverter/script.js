
const radio1 = document.getElementById('radio1')
const radio2 = document.getElementById('radio2')
const result = document.getElementById('result')


submitBtn.onclick = function(){

    if(radio1.checked){
        let inputNum = document.getElementById('inputNum').value
        celsius = Number(inputNum)
        

        let farenheit = (celsius * 9/5) + 32

        result.textContent = `${farenheit.toFixed(1)}` + 'ºF'

    } 
    else if (radio2.checked) {
        let inputNum = document.getElementById('inputNum').value
        farenheit = Number(inputNum)

        let celsius = (farenheit - 32) * 5/9

        result.textContent = `${celsius.toFixed(1)}` + 'ºC'
    } 
    else {
        result.textContent = 'Select a unit'
    }
}