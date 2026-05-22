const leapYears = function(year) {
    isDivisibleByFour = year % 4 == 0;
    isDivisibleByFourHundred = year % 400 == 0;
    isDivisibleByOneHundred = year % 100 == 0;

    if (isDivisibleByFour && !isDivisibleByOneHundred || isDivisibleByFourHundred) {
        return true;
    }


    return false;
};

// Do not edit below this line
module.exports = leapYears;
