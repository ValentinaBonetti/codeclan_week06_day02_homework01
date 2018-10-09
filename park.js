const Park = function(name,ticketPrice,collectionOfDinosaurs){
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.collectionOfDinosaurs = collectionOfDinosaurs;
};

Park.prototype.addDino = function(newDino){
  this.collectionOfDinosaurs.push(newDino);
};

Park.prototype.removeDino = function(){
  this.collectionOfDinosaurs.pop();
};

Park.prototype.findMostAttractive = function(){
  let sortedDinos = this.collectionOfDinosaurs.sort(function(a, b){
    return a.numberOfVisitorsPerDay-b.numberOfVisitorsPerDay});
  return sortedDinos[sortedDinos.length-1];
};

Park.prototype.findDinoBySpecies = function(requiredSpecies){
  let foundDinos = []
  for(dino of this.collectionOfDinosaurs){
    if(dino.species === requiredSpecies){foundDinos.push(dino)}
  };
  return foundDinos;
};

Park.prototype.visitorsPerDay = function(){
  let total = 0;
  for(dino of this.collectionOfDinosaurs){
    total += dino.numberOfVisitorsPerDay;
  };
  return total;
};

Park.prototype.visitorsPerYear = function(daysPerYear){
  return daysPerYear*this.visitorsPerDay();
};

Park.prototype.revenuePerYear = function(daysPerYear){
  return this.visitorsPerYear(daysPerYear)*this.ticketPrice;
};

Park.prototype.removeAllOfASpecies = function(speciesToRemove){
  // first attempt:
  // find all of a species and try to subtract arrays
  // arrayToSubtract = this.findDinoBySpecies(speciesToRemove);
  // result: not easy to subtract arrays of objects

  let recheck = true;
  while(recheck == true){
    for(var i = 0;i < this.collectionOfDinosaurs.length; i ++){
      if(this.collectionOfDinosaurs[i].species == speciesToRemove){
        this.collectionOfDinosaurs.splice(i, 1);
        recheck = true;
        break;}
        else{recheck = false;}
        }
      }


// debugging session:
  // for(var i = 0;i < this.collectionOfDinosaurs.length; i ++){
  //   console.log('species: ',this.collectionOfDinosaurs[i].species);
  //   console.log('species to remove:', speciesToRemove);
  //   console.log(this.collectionOfDinosaurs[i].species == speciesToRemove);
  // };

};

Park.prototype.dietaryRequirements = function(){
  let dietObject = {'carnivore': 0, 'herbivore': 0, 'omnivore': 0};
  // how do I get the keys from the collection (if not there yet)?
  for(dino of this.collectionOfDinosaurs){
    dietString = dino.diet
    dietObject[dietString] += 1;
  };
  return dietObject;
};



module.exports = Park;
