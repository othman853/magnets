# Magnets

Mapping, filtering and (hopefully soon) reducing lists through closures. 

With magnets, this:

```js
const vowels = ['a', 'e', 'i', 'o', 'u'];
const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q'];

const vowelsOnly = letters.filter(l => vowels.includes(l)).map(l => l.toUpperCase());

console.log(vowelsOnly); // [a,e,i,o];
```

can be also achieved by:

```js
const { from, filter, map, is, not } = require('magnets');
const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q'];

const vowelsOnly = 
  (from
    (letters)
      (filter, not(is('a', 'e', 'i', 'o', 'u')))
        (map, l => l.toUpperCase())();

console.log(vowelsOnly); // [a,e,i,o];
```

What are the practical advantages of this? I don't really know (I did it for learning purposes), but the syntax ends up being pretty cool.
