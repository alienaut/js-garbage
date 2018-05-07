const randomNumber = require('random-number');

function randomItem(array) {
  const randomIndex = randomNumber({
    min: 0,
    max: array.length - 1,
    integer: true
  });

  return array[randomIndex];
}

function makeDragon() {
  const dragonSize = ['Big', 'Medium', 'Tiny'];
  const dragonAbilities = ['fire', 'ice', 'lightning'];
  return `${randomItem(dragonSize)} ${randomItem(dragonAbilities)} dragon`;
}

const dragonArmy = {
  [Symbol.iterator]: function() {
    return {
      next: function() {
        const isEnoughDragonSpawned = Math.random() > 0.75;
        if(!isEnoughDragonSpawned) {
          return {
            value: makeDragon(),
            done: false
          }
        }
        return { done: true };
      }
    };
  }
}

for(const dragon of dragonArmy) {
  console.log(dragon);
};

