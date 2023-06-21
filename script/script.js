
function generatePassword(){
    const chars = "abcdefghjkmnpqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ123456789?!@&*()[]"

    let password = ""

    for(let i = 0; i < 8; i++ ){
        const randomNumber = Math.floor(Math.random () * chars.length)
        password += chars.substring(randomNumber, randomNumber + 1)
    }

    const inptEl = document.querySelector('#password')

    inptEl.value = password


}

const passwordLenghtEl = document.querySelector('#password-lenght')



generatePassword()