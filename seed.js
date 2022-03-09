const mongoose = require("mongoose");
const axios = require('axios')
const uri = "mongodb://localhost:27017/StarWars"



Schema = mongoose.Schema;


process.env.PORT
mongoose.connect(uri,{useNewUrlParser: true, useUnifiedTopology: true},(error)=>{
    if(!error){
        console.log("Succes Connect")
    }else{
        console.log("error")
    }
})



// MODEL 
var peopleSchema = new Schema({
    id: { type: Number, trim: true, required: false },
    name: { type: String, trim: true, required: false },
    height: {type: String, trim: true, required: false},
    mass: {type: String, trim: true, required: false},
    hair_color: {type: String, trim: true, required: false},
    skin_color: {type: String, trim: true, required: false},
    eye_color: {type: String, trim: true, required: false},
    birth_year: {type: String, trim: true, required: false},
    gender: {type: String, trim: true, required: false},
    homeworld: {type: String, trim: true, required: false},
    films: {type: Array, trim: true, required: false},
    species: {type: Array, trim: true, required: false},
    vehicles: {type: Array, trim: true, required: false},
    starships: {type: Array, trim: true, required: false},
    url: { type: String, trim: true, required: false },

    });


var People = mongoose.model('Peoples', peopleSchema);



var planetSchema = new Schema({

    id: { type: Number, trim: true, required: false },
    name: { type: String, trim: true, required: false },
    rotation_period: { type: String, trim: true, required: false },
    orbital_period: { type: String, trim: true, required: false },
    diameter: { type: String, trim: true, required: false },
    climate: { type: String, trim: true, required: false },
    gravity: { type: String, trim: true, required: false },
    terrain: { type: String, trim: true, required: false },
    surface_water: { type: String, trim: true, required: false },
    population: { type: String, trim: true, required: false },
    residents: { type: Array, trim: true, required: false },
    films: { type: Array, trim: true, required: false },
    url: { type: String, trim: true, required: false },

    });


var Planet = mongoose.model('Planets', planetSchema);

var StarshipSchema = new Schema({


    id: { type: Number, trim: true, required: false },
    name : { type: String, trim: true, required: false },
    model: { type: String, trim: true, required: false },
    manufacturer: { type: String, trim: true, required: false },
    cost_in_credits: { type: String, trim: true, required: false },
    length: { type: String, trim: true, required: false },
    max_atmosphering_speed: { type: String, trim: true, required: false },
    crew: { type: String, trim: true, required: false },
    passengers: { type: String, trim: true, required: false },
    cargo_capacity: { type: String, trim: true, required: false },
    consumables: { type: String, trim: true, required: false },
    hyperdrive_rating: { type: String, trim: true, required: false },
    MGLT: { type: String, trim: true, required: false },
    starship_class: { type: String, trim: true, required: false },
    pilots: { type: Array, trim: true, required: false },
    films : { type: Array, trim: true, required: false },
    url: { type: String, trim: true, required: false },
    

    });


    var Starship = mongoose.model('Starships', StarshipSchema);



// INSERTION 

const insertPeople = async () =>{

    let y = 0
    while (y<85){
  
    
    await axios.get(`https://swapi.dev/api/people/${y}`).then((people)=>{

    
    People.create({
        id: y,
        name: people.data.name, 
        height: people.data.height,
        mass: people.data.mass,
        hair_color: people.data.hair_color,
        skin_color: people.data.skin_color,
        eye_color: people.data.eye_color,
        birth_year: people.data.birth_year,
        gender: people.data.gender,
        homeworld: people.data.homeworld,
        films: people.data.films,
        species: people.data.species,
        vehicles: people.data.vehicles,
        starships: people.data.starships,
        url:people.data.url
    }, function(err) {
        

    });
}).catch(console.error)
    y++;

  }

}



  const insertPlanet = async () =>{
  let i = 0 

  while (i<60){
  

    await axios.get(`https://swapi.dev/api/planets/${i}`).then((planet)=>{
  
      
      Planet.create({

          id: i,
          name : planet.data.name,
          rotation_period : planet.data.rotation_period,
          orbital_period: planet.data.orbital_period,
          diameter: planet.data.diameter,
          climate: planet.data.climate,
          gravity: planet.data.gravity,
          terrain: planet.data.terrain,
          surface_water: planet.data.surface_water,
          population: planet.data.population,
          residents: planet.data.residents,
          films: planet.data.films,
          url:planet.data.url
  
     
      
      }, function(err) {
          
      });
  }).catch(console.error)
      i++;
  
    }


  }


const insertStarship = async () =>{
    let x = 0;

    while (x<30){
  

    await axios.get(`https://swapi.dev/api/starships/${x}`).then((starship)=>{

    
    Starship.create({

        id: x,
        name : starship.data.name,
        model: starship.data.model,
        manufacturer: starship.data.manufacturer,
        cost_in_credits: starship.data.cost_in_credits,
        length: starship.data.length,
        max_atmosphering_speed: starship.data.max_atmosphering_speed,
        crew: starship.data.crew,
        passengers: starship.data.napassengersme,
        cargo_capacity: starship.data.cargo_capacity,
        consumables: starship.data.consumables,
        hyperdrive_rating: starship.data.hyperdrive_rating,
        MGLT: starship.data.MGLT,
       
        starship_class: starship.data.starship_class,
        pilots: starship.data.pilots,
        films: starship.data.films,
        url:starship.data.url
 

   
    
    }, function(err) {
       
        
    });
}).catch(console.error)
    x++;

  }
}
 

insertStarship()
insertPlanet()
insertPeople()