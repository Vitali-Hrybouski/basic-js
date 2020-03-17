class VigenereCipheringMachine {
    constructor(type = true) {
        this.type = type;
    }
    encrypt(message, key) {
        message = message.toUpperCase();
        key = key.toUpperCase();
        let resultStr = [];
        for (let i = 0, j = 0; i < message.length; i++) {
            if (message.charCodeAt(i) > 90 || message.charCodeAt(i) < 65) {
                resultStr[i] = String.fromCharCode(message.charCodeAt(i));
            }
            else {
                resultStr[i] = String.fromCharCode((((message.charCodeAt(i) - 65) + (key.charCodeAt(j % key.length) - 65)) % 26) + 65);
                j++;
            }
        }
        if (this.type !== true) return resultStr.reverse().join("");
        else return resultStr.join("");
    }

    decrypt(message, key) {

        message = message.toUpperCase();
        key = key.toUpperCase();
        let resultStr = [];
        for (let i = 0, j = 0; i < message.length; i++) {
            if (message.charCodeAt(i) > 90 || message.charCodeAt(i) < 65) {
                resultStr[i] = String.fromCharCode(message.charCodeAt(i));
            }
            else {
                resultStr[i] = String.fromCharCode((((message.charCodeAt(i) - 65) + 26 - (key.charCodeAt(j % key.length) - 65)) % 26) + 65);
                j++
            }
        }
        if (this.type !== true) return resultStr.reverse().join("");
        else return resultStr.join("");
    }
}

module.exports = VigenereCipheringMachine;
