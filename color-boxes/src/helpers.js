function generateRandom(num, maxNum) {
  let arr = [];
  while (arr.length < maxNum) {
    const n = Math.floor(Math.random() * num.length);
    if (!arr.includes(num[n])) arr.push(num[n]);
  }
  return arr;
}

function choice(arr) {
  let randIdx = Math.floor(Math.random() * arr.length);
  return arr[randIdx];
}

export { generateRandom, choice };
