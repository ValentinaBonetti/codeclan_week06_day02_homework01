const assert = require('assert')
const Dino = require('../dino.js')
const Park = require('../park.js')

describe('Park', function(){

  let dino1;
  let dino2;
  let dino3;
  let dino4;
  let park1;


  beforeEach(function(){

    dino1 = new Dino('Tyrannosaurus','carnivore',250);
    dino2 = new Dino('Ankylosaurus','herbivore',30);
    dino3 = new Dino('Velociraptor','carnivore',190);
    dino4 = new Dino('Ornithomimus','omnivore',20);

    park1 = new Park('Peccioli',5,[dino1,dino2,dino3,dino4]);
  });

  it('should have a name',function())
})

// A park must have:
//
// A name
// A ticket price
// A collection of dinosaurs
// A park must be able to:
//
// Add a dinosaur to its collection of dinosaurs
// Remove a dinosaur from its collection of dinosaurs
// Find the dinosaur that attracts the most visitors
// Find all dinosaurs of a particular species
// Calculate the total number of visitors per day
// Calculate the total number of visitors per year
// Calculate the total revenue from ticket sales for one year
// Extensions
// A park must be able to:
//
// Remove all dinosaurs of a particular species
// Provide an object containing each of the diet types and the number of dinosaurs in the park of that diet type
// Example: { 'carnivore': 5, 'herbivore': 2, 'omnivore': 1 }
