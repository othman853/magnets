const { $, filter, map, each, reduce } = require('./lib');
const { log } = console;

const alphabet = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
  'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
];

const vowels = ['a', 'e', 'i', 'o', 'u'];

const isVowel = l => vowels.includes(l);
const isConsonant = l => !isVowel(l);
const uppercase = l => l.toUpperCase();
const concat = (a, b) => a.concat(b);

// TODO: Figure out how hard would it be to implement a flatten
// const matrix = [ [1, 2], [3, 4] ];
// from(matrix) (flatten) (log);


$(alphabet) (map, uppercase) (reduce(''), concat) (log);

$(alphabet) (map, uppercase) (log);

$(alphabet) (filter, isVowel) (log);

$(alphabet) (filter, isConsonant) (map, uppercase) (log);
