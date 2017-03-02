const { from, filter, map, is, not, uppercase } = require('./lib');
const { log } = console;

const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p'];

log(
  (from
    (letters)
      (filter, is('a', 'e', 'i', 'o', 'u')))());

const consonantsOnly =
  (from
    (letters)
      (filter, not(is('a', 'e', 'i', 'o', 'u')))
        (map, uppercase))();

log(consonantsOnly);
