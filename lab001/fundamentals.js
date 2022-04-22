const aCar = {
  owner: "Joe Bloggs",
  address: "3 Walkers Lane",
  previous_owners: [
    { name: "Pat Smith", address: "1 Main Street" },
    { name: "Sheila Dwyer", address: "2 High Street" },
  ],
  type: {
    make: "Toyota",
    model: "Corolla",
    cc: 1.8,
  },
  features: ["Parking assist", "Alarm", "Tow-bar"],
  registration: {
    year: 201,
    countyCode: "WD",
    number: 1058,
  },
};

aCar.mileage = 10000;
aCar.colour = {
  exteriorColour: "red",
  interiorFabric: {
    texture: "leather",
    shade: "cream",
  },
};

for (let i = 0; i < aCar.features.length; i += 1) {
  console.log(aCar.features[i]);
}

for (let i = 0; i < aCar.previous_owners.length; i += 1) {
  console.log(aCar.previous_owners[i].name);
}

for (let p in aCar.type) {
  console.log(p.toUpperCase() + " = " + aCar.type[p]);
}

console.log(
  "First owner : " +
    aCar.previous_owners[0].name +
    " - " +
    aCar.previous_owners[0].address
);
