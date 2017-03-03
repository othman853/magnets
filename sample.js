const { from, filter, map, each, present, not, uppercase } = require('./lib');
const { log } = console;

const alphabet = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
  'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
];

const vowels = ['a', 'e', 'i', 'o', 'u'];

const isVowel = present(vowels);
const isConsonant = not(isVowel);

from(alphabet) (each, log);

from(vowels) (each, log);

log(...(from(alphabet) (map, uppercase)) ());

log(...(from(alphabet) (filter, isVowel)) ());

log(...(from(alphabet) (filter, isConsonant) (map, uppercase)) ());
