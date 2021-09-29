/* eslint-disable no-undef */
const traits2 = [
  { color: 'orange' },
  { type: 'fire' },
  { name: 'charmander' },
  { level: 15 },
  { trainer: 'ash' }
];

function reduce(array, reducer, initialValue = array[0]) {
  let result;
  let preV = initialValue;
  let i = (initialValue === array[0]) ? 1 : 0;
  for (i; i < array.length; i++) {
    result = reducer(preV, array[i]);
    preV = result;
  }
  return result;
}

const difference = reduce(numbers, (pV, cV) => pV - cV);
console.log('difference:', difference);

const quotient = reduce(numbers, (pV, cV) => pV / cV);
console.log('quotient:', quotient);

const wrongBalance = reduce(account, (pV, cV) => {
  if (cV.type === 'deposit') return pV - cV.amount;
  return pV + cV.amount;
}, 0);
console.log('wrongBalance:', wrongBalance);

const stillComposite = reduce(traits2, (pV, cV) => {
  return Object.assign(pV, cV);
});
console.log('stillComposite:', stillComposite);
