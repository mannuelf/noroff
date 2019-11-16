var manny = {
	age: 37,
	hair_color: "dark brown",
	weight: 68,
	eyes: "brown"
};

// adding new key value pairs to object
// can only use dot notation with objects not arrays... for arrays use squar bracket notation.
manny.legs = 2;
manny.job = "Lecturer"
manny.arms = 2;
manny.alive = true;

console.log(manny);


// Object.keys(anyObject) returns an array containing all the keys of anyObject.

console.log(Object.keys(manny));

var movies = {
  "Finding Nemo": {
    releaseDate: 2003,
    duration: 100,
    actors: ["Albert Brooks", "Ellen DeGeneres", "Alexander Gould"],
    format: "DVD"
  },
  "Star Wars: Episode VI - Return of the Jedi": {
    releaseDate: 1983,
    duration: 134,
    actors: ["Mark Hamill", "Harrison Ford", "Carrie Fisher"],
    format: "DVD"
  },
  "Harry Potter and the Goblet of Fire": {
    releaseDate: 2005,
    duration: 157,
    actors: ["Daniel Radcliffe", "Emma Watson", "Rupert Grint"],
    format: "Blu-ray"
  }
};

var starWars = movies["Star Wars: Episode VI - Return of the Jedi"];

console.log(starWars.releaseDate)
