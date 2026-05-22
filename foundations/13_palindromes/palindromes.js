const palindromes = function (word) {
    reverse = '';
    for (i = word.length; i >= 0; i--) {
        reverse += word.charAt(i);
    }

    if (reverse == word) {
        return true;
    }

    return false;
};

// Do not edit below this line
module.exports = palindromes;
