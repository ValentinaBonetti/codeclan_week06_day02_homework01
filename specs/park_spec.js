const assert = require('assert')
const Dino = require('../dino.js')
const Park = require('../park.js')

describe('Park', function(){

  // A park must have:
  //
  // A name
  // A ticket price
  // A collection of dinosaurs

  let dino1;
  let dino2;
  let dino3;
  let dino4;
  let park1;


  beforeEach(function(){

    dino1 = new Dino('Tyrannosaurus','carnivore',250);
    dino2 = new Dino('Ankylosaurus','herbivore',30);
    dino3 = new Dino('Tyrannosaurus','carnivore',190);
    dino4 = new Dino('Ornithomimus','omnivore',20);
    dino5 = new Dino('Valentosaurus','carnivore',0);

    park1 = new Park('Peccioli',5,[dino1,dino2,dino3,dino4]);
  });

  it('should have a name',function(){
    const actual = park1.name;
    assert.strictEqual('Peccioli',actual);
  });

  it('should have a ticket price',function(){
    const actual = park1.ticketPrice;
    assert.strictEqual(5,actual);
  });

  it('should have a collection of dinosaurs',function(){
    const actual = park1.collectionOfDinosaurs;
    assert.deepStrictEqual([dino1,dino2,dino3,dino4],actual);
  });

  describe('Park methods', function(){

    it('should add a dinosaur to its collection of dinosaurs', function(){
      park1.addDino(dino5);
      const actual = park1.collectionOfDinosaurs.includes(dino5);
      assert.strictEqual(true,actual);
    });

    it('should remove a dinosaur from its collection of dinosaurs',function(){
      park1.removeDino();
      const actual = park1.collectionOfDinosaurs.length;
      assert.strictEqual(3,actual);
    });

    it('should find the dinosaur that attracts the most visitors',function(){
      const actual = park1.findMostAttractive();
      assert.deepStrictEqual(dino1,actual);
    });

    it('should find all dinosaurs of a particular species',function(){
      const actual = park1.findDinoBySpecies('Tyrannosaurus');
      assert.deepStrictEqual([dino1,dino3],actual);
    });

    it('should calculate the total number of visitors per day',function(){
      const actual = park1.visitorsPerDay();
      assert.strictEqual(490,actual);
    });

    it('should calculate the total number of visitors per year',function(){
      // take opening days per year as input
      const actual = park1.visitorsPerYear(300);
      assert.strictEqual(490*300,actual);
    });

    it('should calculate the total revenue from ticket sales for one year',function(){
      // take opening days per year as input
      const actual = park1.revenuePerYear(300);
      assert.strictEqual(5*490*300,actual);
    });

    // Extensions

    // Remove all dinosaurs of a particular species
    it('should be able to remove all dinosaurs of a particular species',function(){
      park1.removeAllOfASpecies('Tyrannosaurus');
      actual = park1.collectionOfDinosaurs;
      expected = [dino2,dino4];
      assert.deepStrictEqual(expected,actual);
    });

    // Provide an object containing each of the diet types
    // and the number of dinosaurs in the park of that diet type
    // Example: { 'carnivore': 5, 'herbivore': 2, 'omnivore': 1 }
    it('should provide dietary requirements and numbers for each', function(){
      actual = park1.dietaryRequirements();
      expected = {'carnivore': 2, 'herbivore': 1, 'omnivore': 1};
      assert.deepStrictEqual(expected,actual);
    })

  });
})
