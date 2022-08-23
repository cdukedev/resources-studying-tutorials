
// HIGHER ORDER FUNCTIONS

// 1.
var triple = function (x) {
    return x * 3;
    }

    var waffle = triple

    waffle(30);


// 2. an array of animal names and species as name value pairs
var animals = [
    {name: 'Fluffykins', species: 'rabbit'},
    {name: 'Caro', species: 'dog'},
    {name: 'Hamilton', species: 'dog'},
    {name: 'Harold', species: 'fish'},
    {name: 'Ursula', species: 'cat'},
    {name: 'Jimmy', species: 'fish'}
]

var isDog = function(animal) {
    return animal.species === 'dog'
}

var dogs = animals.filter(isDog)
//create otherAnimals variable with the reject function
var otherAnimals = animals.reject(isDog);

// Regular for loop for this function
// var dogs = [];
//     for(var i = 0; i < animals.length; i++){
//         if(animals[i].species === 'dog'){
//             dogs.push(animals[i].name);
//         }
//     }
