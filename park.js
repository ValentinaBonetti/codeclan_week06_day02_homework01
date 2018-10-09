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

module.exports = Park;
