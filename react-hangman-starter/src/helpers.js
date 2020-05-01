choice = (words) => {
  let randIdx = Math.floor(Math.random() * words.length);
  return words[randIdx];
};

export { choice };
