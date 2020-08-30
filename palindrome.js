function isPalindrome(word) {
  const wordArray = word.toLowerCase().split('');

  if (wordArray.length % 2 === 0) {
    return false;
  }
  console.log(wordArray);

  const length = wordArray.length;
  const halfway = Math.ceil(length / 2);

  for (let i = 0; i <= halfway; i++) {
    console.log('Index', length - i - 1, wordArray[length - i - 1]);
    if (wordArray[i] !== wordArray[length - i - 1]) {
      return false;
    }
  }

  return true;
}

console.log(isPalindrome('A man a plan a canal panama'));
