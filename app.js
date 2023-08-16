'use strict';
function fib(n) {
  if (n === 0) {
    return 0;
  }
  else if (n === 1) {
    return 1;
  }

  return fib(n - 1) + fib(n - 2);
}

const length = 40;
for (let num = 0; num <= length; num++) {
  console.log(`num: ${num}, result:${fib(num)}`);
}