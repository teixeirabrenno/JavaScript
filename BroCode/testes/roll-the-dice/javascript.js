document.getElementById('button').onclick = function(){
    let randomNum1 = Math.random() * 6
    let randomNum2 = Math.random() * 6
    let randomNum3 = Math.random() * 6


    let a = Math.round(randomNum1)
    let b = Math.round(randomNum2)
    let c = Math.round(randomNum3)

    let label1 = document.getElementById('label1')
    let label2 = document.getElementById('label2')
    let label3 = document.getElementById('label3')

    if (a == 0) {
        a += 1
    } else if (b == 0 ) {
        b += 1
    } else if (c == 0) {
        c += 1
    }

    label1.textContent = a
    label2.textContent = b
    label3.textContent = c


}




