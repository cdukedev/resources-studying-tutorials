// MAP Higher Order FUNCTIONS
//1.
var animals = [
    {name: 'Fluffykins', species: 'rabbit'},
    {name: 'Caro', species: 'dog'},
    {name: 'Hamilton', species: 'dog'},
    {name: 'Harold', species: 'fish'},
    {name: 'Ursula', species: 'cat'},
    {name: 'Jimmy', species: 'fish'}
]

//with the arrow pointer
var names = animals.map((animal) => animal.name + " is a " + animal.species)


//without the arrow pointer
// var names = animals.map(function(animal){
//     return animal.name + ' is a ' + animal.species
// });


// //with a for loop
// var names = []
// for(var i = 0; i < animals.length; i++) {
//     names.push(animals[i].name);
// }
console.log(names);


