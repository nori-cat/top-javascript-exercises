const reverseString = function(word) {
    revWord = "";
    for (i = word.length; i >= 0; i--) {
        revWord += word.charAt(i);
    }

    return revWord;
};

// Do not edit below this line
module.exports = reverseString;
