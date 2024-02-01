function generatePassword(length, includesLowercase, includesUppercase, includesNumber, includesSymbol){

    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVXWYZ'
    const lowercaseChars = 'abcdefghijklmnopqrstuvxwyz'
    const numberChars = '0123456789'
    const symbolChars = '!@#$%¨&*()_+[]{}^~'

    let allowedChars = ''
    let password = ''

    allowedChars += includesLowercase ? lowercaseChars : ''
    allowedChars += includesUppercase ? uppercaseChars: ''
    allowedChars += includesNumber ? numberChars : ''
    allowedChars += includesSymbol ? symbolChars: ''

    if (allowedChars.length <= 0 ){
         console.log('Your password must have at least one character.')
    }

    for(let i = 0; i < length; i++){
        const randomIndex = Math.floor(Math.random() * allowedChars.length)
         password = password + allowedChars[randomIndex]
    }
    return password
}

const passwordLenght = 8
const includesUppercase = true
const includesLowercase = true
const includesNumber = true
const includesSymbol = false

const password = generatePassword(passwordLenght, includesLowercase, includesUppercase, includesNumber, includesSymbol)

console.log(`Password: ${password}`)
