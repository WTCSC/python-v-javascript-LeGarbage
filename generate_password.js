function generatePassword(length = 12) {
    const validChars = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm1234567890_";
    let password = "";
    for(let i = 0; i < length; i++){
        password += validChars[Math.floor(Math.random() * validChars.length)]
    }
    return password
}

module.exports = generatePassword;