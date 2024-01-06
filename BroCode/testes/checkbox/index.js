let checkbox = document.getElementById('checkbox')
let input1 = document.getElementById('input1')
let input2 = document.getElementById('input2')
let input3 = document.getElementById('input3')
let verifyInput = document.getElementById('verifyInput')
let p1 = document.getElementById('p1')
let p2 = document.getElementById('p2')

verifyInput.onclick = function(){

    if (checkbox.checked) {
        p1.textContent = `You are subscribed.`

        if (input1.checked) {
            p2.textContent = `You are paying with PayPal.`
        } else if (input2.checked) {
            p2.textContent = `You are paying with Mastercard.`
        } else if (input3.checked) {
            p2.textContent = `You are paying with Visa.`
        } else { 
            p1.textContent = `You are subscribed.`
            p2.textContent = `Now all you have to do is to select a payment option.`
        }
    
    } else {
        p1.textContent = `You are not subscribed yet. You have to subscribe to the channel to be able to donate.`
    }

    
} 