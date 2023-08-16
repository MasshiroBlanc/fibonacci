'use strict';
const memo = new Map();
memo.set(0, 0);
memo.set(1, 1);

function fib(n) {
  if (memo.has(n)) {
    return memo.get(n);
  }

  const value = fib(n - 1) + fib(n - 2);
  memo.set(n, value);
  return value;
}

const length = 400;
for (let num = 0; num <= length; num++) {
  console.log(`num: ${num}, result:${fib(num)}`);
}