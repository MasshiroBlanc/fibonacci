'use strict';

const resMemo = new Map();
resMemo.set(0, 0);
resMemo.set(1, 0);
resMemo.set(2, 1);

function trib(n) {
  if (resMemo.has(n)) {
    return resMemo.get(n);
  }

  const tribAns = trib(n - 3) + trib(n - 2) + trib(n - 1);
  resMemo.set(n, tribAns);
  return tribAns;
}

const length = 400;
for (let num = 0; num <= length; num++) {
  console.log(`num: ${num}, result:${trib(num)}`);
}