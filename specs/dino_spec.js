// A dinosaur must have:
//
// A species
// A diet (e.g. carnivore, herbivore or omnivore)
// An average number of visitors attracted per day

const assert = require('assert')
const Dino = require('../dino.js')

describe('Dino', function(){

  let dino1;

  beforeEach(function(){
    dino1 = new Dino('Tyrannosaurus','carnivore',250);
  });

  it('should have a species',function(){
    const actual = dino1.species;
    assert.strictEqual(actual,'Tyrannosaurus');
  });

  it('should have a diet',function(){
    const actual = dino1.diet;
    assert.strictEqual(actual,'carnivore');
  });

  it('should have an average numberOfVisitors per day',function(){
    const actual = dino1.numberOfVisitorsPerDay;
    assert.strictEqual(actual,250);
  });

});
