function spinWords(str) {
    return str
        .split(' ')
        .map(word => word.length >= 5 ? word.split('').reverse().join('') : word)
        .join(' ');
}

const result11 = spinWords("Привет от Legacy");
console.log(result11); // тевирП от ycageL

const result22 = spinWords("This is a test");
console.log(result22); // This is a test