let num_arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let cap_letter_arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let lowercase_letter_arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let spec_chars_arr = ['!', '@', '#', '$', '%', '&', '?', '-', '+', '=', '~'];


document.getElementById('range-length').oninput = function() {
    // ползунок - длина
    document.getElementById('key-length').innerHTML = this.value;
}

document.getElementById('generator_button').onclick = generateKey;

function generateKey() {

    let result = [];
    let out = '';

    let numbers = document.getElementById("numbers").checked;
    let capitalLetter = document.getElementById("capital-letter").checked;
    let lowcaseLetter = document.getElementById("lowcase-letter").checked;
    let specChars = document.getElementById("spec-chars").checked;
    let resultMessege = document.getElementById('keys-out');

    if (numbers) {
        // включены ли цифры
        result = result.concat(num_arr);
    }
    if (capitalLetter) {
        // включены ли строчные символы
        result = result.concat(cap_letter_arr);
    }
    if (lowcaseLetter) {
        // включены ли прописные
        result = result.concat(lowercase_letter_arr);
    }
    if (specChars) {
        // включены ли спецсимволы
        result = result.concat(spec_chars_arr);
    }

    if (result.length !== 0) {
        result.sort(compareRandom); // перемешиваем результирующий масив
        console.log(result);
        document.getElementById('keys-out').innerHTML = '';

        let keyLength = parseInt(document.getElementById('range-length').value);

        for (let i = 0; i < keyLength; i++) {
            out += result[randomInteger(0, result.length - 1)];
        }

        resultMessege.innerHTML = '<p>' + out + '</p>';
    } else {
        resultMessege.innerHTML = '<p>Choose one value</p>';
    }

}

function compareRandom() {
    return Math.random() - 0.5;
}

function randomInteger(min, max) {
    var rand = min - 0.5 + Math.random() * (max - min + 1)
    rand = Math.round(rand);
    return rand;
}