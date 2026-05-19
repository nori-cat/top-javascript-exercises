const removeFromArray = function(array, element) {
    let resultArr = [];

    let index = array.indexOf(element);

    for (let i = 0; i < array.length; i++) {
        if (i === index) {
            continue;
        } else {
            resultArr.push(array[i]);
        }
    }

    return resultArr;
};

// Do not edit below this line
module.exports = removeFromArray;
