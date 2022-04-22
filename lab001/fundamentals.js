const aCar = {
    owner : "Joe Bloggs",
    address : '3 Walkers Lane',
    previous_owners: [
      { name: "Pat Smith", address: "1 Main Street" },
      { name: "Sheila Dwyer", address: "2 High Street" },
    ],
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
  
  console.log('First owner : ' + aCar.previous_owners[0].name + " - " + aCar.previous_owners[0].address )
