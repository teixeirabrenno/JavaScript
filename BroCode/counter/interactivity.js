const decreaseBtn =  document.getElementById('dec-btn'); 
const resetBtn = document.getElementById('res-btn')
const increaseBtn = document.getElementById('inc-btn')
const countLabel = document.getElementById('countLabel')
let count = 0

increaseBtn.onclick = function(){
    count++;
    countLabel.innerHTML = count
}

decreaseBtn.onclick = function(){
    count--;
    countLabel.innerHTML = count
}

resetBtn.onclick = function(){
    count = 0
    countLabel.innerHTML = count
}
