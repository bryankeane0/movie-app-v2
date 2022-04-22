const aCar = {
    owner : "Joe Bloggs",
    type : {
      make: "Toyota",
      model: "Corolla",
      cc: 1.8,
    },
    registration : {
      year: 201,
      countyCode: "WD",
      number: 1058,
    }
  };

  aCar.mileage = 10000;
  aCar.colour = {
    exteriorColour: "red",
    interiorFabric: {
      texture: "leather",
      shade: "cream"
    }
  };
  
  console.log("It is a " + aCar.colour.exteriorColour + " car, " + aCar.mileage + " mileage, with " + aCar.colour.interiorFabric.texture + " fabric")
