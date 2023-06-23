
const inptEl = document.querySelector('#password')
const  upperCaseCheckEl = document.querySelector('#uppercase-check')
const  numberCheckEl = document.querySelector('#number-check')
const  symbolCheckEl = document.querySelector('#symbol-check')
const  securityIndicatorBarEl = document.querySelector('#security-indicator-bar')


let passwordLenght = 16 


function generatePassword(){
    let chars = "abcdefghjkmnpqrstuvwxyz"

    const upperCaseChars = "ABCDEFGHJKLMNPQRSTUVWXYZ"
    const numberChars = "123456789"
    const symbolChars = "?!@&*()[]"

    if(upperCaseCheckEl.checked){
        chars += upperCaseChars
    }

    if(numberCheckEl.checked){
        chars += numberChars
    }
    

    if(symbolCheckEl.checked){
        chars += symbolChars
    }



    let password = ""

    for(let i = 0; i < passwordLenght; i++ ){
        const randomNumber = Math.floor(Math.random () * chars.length)
        password += chars.substring(randomNumber, randomNumber + 1)
    }


    inptEl.value = password

    calculateQuality() // toda vez que gerar o password é preciso calcular essa função
    calculateFontSize()


}

function calculateQuality (){
    // T*0.25 + M*0.15 + N*0.30 + S*0.30 = 100

    const percent = Math.round((passwordLenght / 64 ) * 25 +
     (upperCaseCheckEl.checked ? 15 : 0) + 
     (numberCheckEl.checked ? 30 : 0) + 
     (symbolCheckEl.checked ? 30 : 0)
    )


    securityIndicatorBarEl.style.width = `${percent}%`

    if(percent > 69){
        //safe
        securityIndicatorBarEl.classList.remove('critical')
        securityIndicatorBarEl.classList.remove('warning')
        securityIndicatorBarEl.classList.add('safe')

    } else if ( percent > 50){
        //warning
        securityIndicatorBarEl.classList.remove('critical')
        securityIndicatorBarEl.classList.remove('safe')
        securityIndicatorBarEl.classList.add('warning')
    }else {
        //critical
        securityIndicatorBarEl.classList.remove('safe')
        securityIndicatorBarEl.classList.remove('warning')
        securityIndicatorBarEl.classList.add('critical')
    }

    if(percent >=100){
        securityIndicatorBarEl.classList.add('completed')
    } else{
        securityIndicatorBarEl.classList.remove('completed')
    }
}

function calculateFontSize(){
    if ( passwordLenght > 45){
        inptEl.classList.remove("font-sm")
        inptEl.classList.remove("font-xs")
        inptEl.classList.add("font-xxs")
        
    } else if( passwordLenght > 32) {
        inptEl.classList.remove("font-sm")
        inptEl.classList.remove("font-xxs")
        inptEl.classList.add("font-xs")

    } else if( passwordLenght > 22) {
        inptEl.classList.remove("font-xs")
        inptEl.classList.remove("font-xxs")
        inptEl.classList.add("font-sm")
    } else{
        inptEl.classList.remove("font-sm")
        inptEl.classList.remove("font-xxs")
        inptEl.classList.remove("font-xs")
    }
    
}


function copy(){
    navigator.clipboard.writeText(inptEl.value)
}

const passwordLenghtEl = document.querySelector('#password-lenght')

passwordLenghtEl.addEventListener('input', ()=>{

    passwordLenght = passwordLenghtEl.value
    document.querySelector('#password-length-text').innerText = passwordLenght

    generatePassword() //cada vez que arrastar o range precisa chamar essa função para funcionar
})
upperCaseCheckEl.addEventListener('click', generatePassword)
numberCheckEl.addEventListener('click', generatePassword)
symbolCheckEl.addEventListener('click', generatePassword)

document.querySelector('#copy-1').addEventListener('click', copy)
document.querySelector('#copy-2').addEventListener('click', copy)
document.querySelector('#renew').addEventListener('click', generatePassword)

generatePassword()