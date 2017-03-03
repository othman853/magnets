# Magnets

Mapping, filtering and (hopefully as soon as possible) reducing lists through closures.

What are the practical advantages of this? I don't really know (or care), I did this for learning purposes. The syntax ended up being pretty cool.

I hope the lib could be self explanatory, and by just looking at `sample.js` people can figure out what it is all about. In case it is not that simple, here goes an example:

Consider this vanilla.js example:

```js
const alphabet = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
  'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
];

const vowels = ['a', 'e', 'i', 'o', 'u'];

const isVowel = l => vowels.includes(l);
const isConsonant = l => !isVowel(l);
const uppercase = l => l.toUpperCase();

// print the uppercased alphabet
alphabet.map(uppercase).forEach(console.log);

// print only vowels
alphabet.filter(isVowel).forEach(console.log);

// print only uppercased consonants
alphabet.filter(isConsonant).map(uppercase).forEach(console.log);

```

Magnets achieves the same result like this:

```js
const alphabet = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
  'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
];

const vowels = ['a', 'e', 'i', 'o', 'u'];

const isVowel = l => vowels.includes(l);
const isConsonant = l => !isVowel(l);
const uppercase = l => l.toUpperCase();

// print the uppercased alphabet
from(alphabet) (map, uppercase) (each, log);

// print only vowels
from(alphabet) (filter, isVowel) (each, log);

// print only uppercased consonants
from(alphabet) (filter, isConsonant) (map, uppercase) (each, log);
```
