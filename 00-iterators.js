const dragons = [
  'cool dragon',
  'angry dragon',
  'nasty dragon'
];

const iterator = dragons[Symbol.iterator]();
iterator.next(); // { value: 'cool dragon', done: false }
iterator.next(); // { value: 'angry dragon', done: false }
iterator.next(); // { value: 'nasty dragon', done: false }
iterator.next(); // { value: undefined, done: true }

for (const dragon of dragons) {
  console.log(dragon);
}
