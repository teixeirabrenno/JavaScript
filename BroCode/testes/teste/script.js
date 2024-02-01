///////////////////////////// WHILE ////////////////////////////////////////////////////////////////////////////
// let loggedIn = false
// let username
// let password

// while (!loggedIn){
//     username = window.prompt('Type your username.')
//     password = window.prompt('Type your password.')

//     if (username != '' && password != ''){
//         loggedIn = true
//     }    
// }


// console.log(`Your username is ${username}`)
// console.log(`Your password is ${password}`)
// console.log('You are logged in!')
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////// LOOP WITH ARRAYS //////////////////////////////////////////////////////////
// let i
// let PA = []
// let ratio = 5

// for (i = 3; i <= 115; i = i + ratio) {
//     PA.push(i)
// }

// console.log(PA)
// console.log(`O quinto termo dessa P.A. é ${PA[4]}`)



/////////////////////////////////////////////////// RNG GAME ///////////////////////////////////////////////////
// const minNum = 50
// const maxNum = 100
// const answer = Math.floor(Math.random() * (maxNum - minNum + 1) + minNum)

// let attempts = 0
// let guess;
// let running = true

// while(running){

//     guess = window.prompt(`Guess a number between ${minNum} - ${maxNum}`)
//     guess = Number(guess)

//     if(isNaN(guess)){
//         window.alert('Please, enter a valid number')
//     } 
//     else if(guess < minNum || guess > maxNum){
//         window.alert('Please, enter a valid number')
//     }
//     else {
        
//         attempts++
//         if(guess < answer){
//             window.alert('Too low! Try again!')
//         }
//         else if(guess > answer){
//             window.alert('Too high! Try again!')
//         }
//         else {
//             window.alert(`Correct! The answer is ${answer}. It took you ${attempts} attempts. `)
//             running = false
//         }
        
//     }


    
// }
///////////////////////////////////////////////RNG GAME///////////////////////////////////////////////////////

//  function openFridge(...foods){
//      console.log(...foods)
//  }

//  const food1 = 'pizza'
//  const food2 = 'feijão'
//  const food3 = 'arroz'
//  const food4 = 'banana'
//  const food5 = 'hotdog'


//  openFridge(food1, food2, food3, food4, food5)

// mySubmit.onclick = function(){
//     const name1 = document.getElementById('txt1').value
//     const name2 = document.getElementById('txt2').value
//     const name3 = document.getElementById('txt3').value
//     let p = document.getElementById('myP')
    
//     function combineStrings(...strings){
//         return strings.join(' ')
//     }
    
//     const fullname = combineStrings(name1, name2, name3)
    

//     p.innerHTML=  p.innerHTML + `<p>${fullname}</p>.`


// }

// function getAverage(...numbers){
    
//     let result = 0
//     for(let number of numbers){
//         result += number 
//     }
//     return result / numbers.length
    

// }

// const funcao = getAverage(1, 5, 6)

// console.log(funcao)


// let seuNome = (n) =>{
//     console.log(`Olá, ${n}.`)
// }

// function principal(callback){
//     let nome = prompt('Qual o seu nome?')

//     callback(nome)
// }

// principal(seuNome)

// const dates = ['2024-1-10', '2025-2-20', '2026-3-30']  

// const newDates = dates.map(formatDates) // Atribuindo a função ao array antigo e criando um array novo
// console.log(newDates)

// function formatDates(element){
//     const parts = element.split('-')  // Agora é como se eu tivesse um array novo ['2024', '1', '10'] || ['2025', '2', '20'] || etc
//     return `${parts[2]}/${parts[1]}/${parts[0]}` // Retornando o modo como que eu quero que apareçam as datas formatadas
// }

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const oddNumbers = numbers.filter(checkOddnumber)
// console.log(oddNumbers)

// function checkOddnumber(number){
//     if (number % 2 == 0){
//         return number
//     } 
// }

// const funcionarios = ['Ana', 'Brenno', 'Roberto', 'Gabrielle', 'Fernanda', 'Maurício', 'Michelle', 'Amélia', 'Maria', 'Amanda', 'Bruna', 'Larissa', 'Thais', 'Luis', 'Mateus', 'Lucas', 'Gustavo', 'Victor', 'Abílio', 'Antônio', 'Amanda', 'Alice', 'Brenda']

// const funcionariosA  = funcionarios.filter(nameswithA)
// const funcionariosB  = funcionarios.filter(nameswithB)

// console.log(funcionariosA)
// console.log(funcionariosB)


// function nameswithA(name){
//     if(name.charAt(0) == 'A' || name.charAt(0) == 'a'){
//         return name
//     }
// }

// function nameswithB(name){
//     if(name.charAt(0) == 'B' || name.charAt(0) == 'b'){
//         return name
//     }
// }


// const prices = []

// for(let i = 0; i <= 99; i++){
//     const randomNumber = Math.floor(Math.random() * 50)   
//     prices.push(randomNumber)
   
// }
// console.log(prices)

// const evenNumbers = prices.filter(isEven)
// const oddNumbers = prices.filter(isOdd)

// console.log(evenNumbers)
// console.log(oddNumbers)

// function sum(x, y){
//     return x + y / prices.length
// }

// function isEven(num){
//     return num % 2 === 0 
// }

// function isOdd(num){
//     return num % 2 !== 0
// }

// function counting(){
//     console.log('We will count from 1 to 10.')
// }

// counting()
// setTimeout(num1, 100)
// setTimeout(num2, 200)
// setTimeout(num3, 300)
// setTimeout(num4, 400)
// setTimeout(num5, 500)
// setTimeout(num6, 600)
// setTimeout(num7, 700)
// setTimeout(num8, 800)
// setTimeout(num9, 900)
// setTimeout(num10, 1000)


// function num1(){
//     console.log('Number 1')
// }
// function num2(){
//     console.log('Number 2')
// }
// function num3(){
//     console.log('Number 3')
// }
// function num4(){
//     console.log('Number 4')
// }
// function num5(){
//     console.log('Number 5')
// }
// function num6(){
//     console.log('Number 6')
// }
// function num7(){
//     console.log('Number 7')
// }
// function num8(){
//     console.log('Number 8')
// }
// function num9(){
//     console.log('Number 9')
// }
// function num10(){
//     console.log('Number 10')
// }


let array = [1, 2, 3, 4, 5, 6, 7, 8, 9]

let evenNum = array.filter(isEven)
console.log(evenNum)

function isEven(num){
    return num % 2 === 0
}