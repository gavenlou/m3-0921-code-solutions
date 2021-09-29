/* eslint-disable no-undef */

function map(array, transform) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(transform(array[i]));
  }
  return result;
}

const halved = map(numbers, num => num / 2);
console.log('halved:', halved);

const prices2 = map(numbers, num => `$${num}`);
console.log('prices2:', prices2);

const lowerCased = map(languages, lang => lang.toLowerCase());
console.log('lowerCased:', lowerCased);

const lastLetters = map(languages, lang => lang[lang.length - 1]);
console.log('lastLetters:', lastLetters);
