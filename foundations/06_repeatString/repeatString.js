const repeatString = function(word, num) {
    let repeatString = '';

    if (num < 0) {
        repeatString += 'ERROR';
    } else {
        for (i = 0; i < num; i++) {
            repeatString += word;
        }
    }

    return repeatString;
};

// Do not edit below this line
module.exports = repeatString;
