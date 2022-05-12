// Code your solutions in this file
function writeCards(name, word) {
    const result = [];
    for (let i = 0; i < name.length; i++) {
        result.push(`Thank you, ${name[i]}, for the wonderful ${word} gift!`);
    }
    return result;
}

function countDown(n) {
    for (let i = n; i >= 0; i--) {
        console.log(i);
    }
}