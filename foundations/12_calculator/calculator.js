const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num2 - num1;
};

const sum = function(arr) {
	sum = 0;
  for (i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
};

const multiply = function(arr) {
  prod = 0;
  for (i = 0; i < arr.length; i++) {
    prod *= arr[i];
  }

  return prod;
};

const power = function(base, exp) {
	result = base;
  for (i = 0; i < exp; i++) {
    result *= base;
  }
};

const factorial = function(num) {
	result = 0;
  for (i = num; i > 0; i--) {
    prod = i;
    for (j = i - 1; j > 0; j--) {
      prod *= j;
    }

    prod += result;

  }

  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
