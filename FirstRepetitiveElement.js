function repetitive(str) {
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j < str.length; j++) {
            if (str[i] === str[j]) {
                return str[i];
            }
        }
    }
    return null; // Return null if no repeated characters are found
}

const result = repetitive("armeen");
console.log(result);