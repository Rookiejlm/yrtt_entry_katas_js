// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

function pigLatin(str){
    str = str.split('');
    for(let i=0; i<str.length; i++){
    if(/[a-zA-Z]/.test(str[i])){
    str[i] = str[i].slice(1) + str[i][0] + 'ay';
    }
    }
    return str.join('');
}

module.exports = {
    pigLatin
};
