let passwordLenght = 16 

function generatePassword(){
    const chars = "abcdefghjkmnpqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ123456789?!@&*()[]"

    let password = ""

    for(let i = 0; i < passwordLenght; i++ ){
        const randomNumber = Math.floor(Math.random () * chars.length)
        password += chars.substring(randomNumber, randomNumber + 1)
    }

    const inptEl = document.querySelector('#password')

    inptEl.value = password


}

const passwordLenghtEl = document.querySelector('#password-lenght')

passwordLenghtEl.addEventListener('input', ()=>{

    passwordLenght = passwordLenghtEl.value

    generatePassword() //cada vez que arrastar o range precisa chamar essa função para funcionar
})


generatePassword()