const numbers2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const names2 = [
  'Ada',
  'Hedy',
  'Jean',
  'Grace',
  'Evelyn',
  'Joan',
  'Elizabeth',
  'Janese',
  'Donna'
];
function filter(array, predicate) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    if (predicate(array[i])) result.push(array[i]);
  }
  return result;
}

const oddNumbers = filter(numbers2, x => (x % 2) !== 0);
console.log('oddNumbers:', oddNumbers);

const underFive = filter(numbers2, num => num < 5);
console.log('underFive:', underFive);

const doesNotStartWithE = filter(names2, name => name.charAt(0) !== 'E');
console.log('doesNotStartWithE:', doesNotStartWithE);

const noD = filter(names2, name => !name.includes('D') && !name.includes('d'));
console.log('noD:', noD);
