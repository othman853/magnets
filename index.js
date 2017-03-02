const { from, filter, map, is, not, uppercase } = require('./lib');

const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p'];

const vowelsOnly =
  (from
    (letters)
      (filter, is('a', 'e', 'i', 'o', 'u')))();

const consonantsOnly =
  (from
    (letters)
      (filter, not(is('a', 'e', 'i', 'o', 'u')))
        (map, uppercase))();

console.log(vowelsOnly);
console.log(consonantsOnly);
