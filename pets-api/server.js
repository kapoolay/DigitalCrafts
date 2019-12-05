const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var owners = [
  {
    id: 1,
    name: "Adam",
    pets: [
      {
        id: 1,
        name: "Vera",
        type: "Dog"
      },
      {
        id: 2,
        name: "Felix",
        type: "Cat"
      }
    ]
  },
  {
    id: 2,
    name: "Kamilah",
    pets: [
      {
        id: 1,
        name: "Doug",
        type: "Dog"
      }
    ]
  }
];
var nextOwnerId = 3;

/////////////////////////////////////////////////
// operations on owners
/////////////////////////////////////////////////

// GET /api/owners
app.get("/api/owners", function(req, res, next) {
  res.json(owners);
});

// GET /api/owners/:id
app.get("/api/owners/:id", function(req, res, next) {
  res.json(findOwnerById(req.params.id));
});

// POST /api/owners
app.post("/api/owners", function(req, res, next) {
  if (!req.body || !req.body.name) {
    res.status(400).send("Provide an owner name in the POST body");
  }
  var newOwner = req.body; // POST body requires a key "name"
  newOwner.id = nextOwnerId;
  nextOwnerId++;
  owners.push(newOwner);
  res.json(newOwner);
});

// PUT /api/owners/:id
app.put("/api/owners/:id", function(req, res, next) {
  var newOwnerData = req.body;
  var newOwnerDataKeys = Object.keys(newOwnerData);
  var ownerToUpdate = findOwnerById(req.params.id);

  newOwnerDataKeys.forEach(function(key) {
    ownerToUpdate[key] = newOwnerData[key];
  });

  res.json(ownerToUpdate);
});

// DELETE /api/owners/:id
app.delete("/api/owners/:id", function(req, res, next) {
  var indexToRemove = owners.findIndex(function(owner) {
    return owner.id == req.params.id;
  });

  owners.splice(indexToRemove, 1);

  res.json(owners);
});

/////////////////////////////////////////////////
// operations on pets
/////////////////////////////////////////////////

// GET /api/owners/:id/pets
app.get("/api/owners/:id/pets", function(req, res, next) {
  res.json(findOwnerById(req.params.id).pets);
});

// GET /api/owners/:id/pets/:petId
app.get("/api/owners/:id/pets/:petId", function(req, res, next) {
  res.json(findOwnerPetById(req.params.id, req.params.petId));
});

// POST /api/owners/:id/pets
app.post("/api/owners/:id/pets", function(req, res, next) {
  if (!req.body || !req.body.name) {
    res.status(400).send("Provide a pet name in the POST body");
  }

  var owner = findOwnerById(req.params.id);
  
  if (!owner.pets) {
      // add an empty array if an array doesn't already exist 
      owner.pets = [];
  }

  var pets = owner.pets;
  var nextPetId = findMaxPetId(pets) + 1;

  var newPet = req.body;
  newPet.id = nextPetId;
  pets.push(newPet);

  res.json(newPet);
});

// PUT /api/owners/:id/pets/:petId
app.put("/api/owners/:id/pets/:petId", function(req, res, next) {
  var newPetData = req.body;
  var newPetDataKeys = Object.keys(newPetData);
  var petToUpdate = findOwnerPetById(req.params.id, req.params.petId);

  newPetDataKeys.forEach(function(key) {
    petToUpdate[key] = newPetData[key];
  });

  res.json(petToUpdate);
});

// DELETE /api/owners/:id/pets/:petId
app.delete("/api/owners/:id/pets/:petId", function(req, res, next) {
  var owner = findOwnerById(req.params.id);
  var pets = owner.pets;
  var indexToRemove = pets.findIndex(function(pet) {
    return pet.id == req.params.petId;
  });

  pets.splice(indexToRemove, 1);

  res.json(owner);
});

/////////////////////////////////////////////////

function findOwnerById(id) {
  var foundOwner = owners.find(function(owner) {
    return owner.id == id;
  });

  return foundOwner;
}

function findOwnerPetById(ownerId, petId) {
  var foundPet = findOwnerById(ownerId).pets.find(function(pets) {
    return pets.id == petId;
  });

  return foundPet;
}

function findMaxPetId(pets) {

  if (pets.length === 0) {
    return 0;
  } else {
    var idsArray = pets.map(function(pet) {
      return pet.id;
    });

    // note that we are using the spread operator (...)
    return Math.max(...idsArray);
  }
}

/////////////////////////////////////////////////

app.listen(3000, function() {
  console.log("Pets API is now listening on port 3000...");
});