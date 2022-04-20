const me = {
  name: {
    first: "Diarmuid",
    last: "O'Connor",
  },
  gender: "m",
};

const her = {
  name: {
    first: "Sheila",
    middle: "Yvonne",
    last: "Fleming",
  },
  gender: "f",
};

const here = {
  name: "Waterford",
  location: {
    long: -7.11194,
    lat: 52.25833,
  },
};

// ==================================

console.log("---- Function declarations --------");
function validatePerson(person) {
  return "name" in person && "gender" in person;
}

console.log(validatePerson(me));
console.log(validatePerson(here));

//=========================

console.log("---- Function expressions ----------");
const addMiddleName = function (person, middleName) {
  if (!validatePerson(person)) {
    throw new Error("Not a person");
  }
  if (person.name.middle === undefined) {
    person.name.middle = middleName;
  } else {
    person.name.middle += " " + middleName;
  }
  return true;
};
try {
  addMiddleName(me, "Stephen");
  addMiddleName(her, "Jane");
  console.log(me.name);
  console.log(her.name);
  // addMiddleName(here)
} catch (error) {
  throw error;
}
// ==================================

console.log("----- Arrow Function  --------");

const salute = (person) => {
  if (!validatePerson(person)) {
    throw new Error("Not a person");
  }
  // Ternary operator - ?:
  const title = person.gender === "m" ? "Mr" : "Ms";
  return `${title} ${person.name.first} ${person.name.last} `;
};

console.log(salute(me));

console.log("---- Shorthand Arrow Function  -------");

// Drop parentheses when only one parameter
const hasMiddleName = person =>
  validatePerson(person) && "middle" in person.name;

console.log(hasMiddleName(her));
console.log(hasMiddleName(here));

// ==================================

console.log("----- Anonymous Function  --------");

const nums = [2,3,4,6,8,10]

nums.forEach( 
   (n, index, array) => {    // Anonymous function
         console.log(`${n} at index ${index} of ${array}` )
   }
)

let evens = 0
nums.forEach( 
  (n) =>  evens += (n % 2 == 0) ? 1 : 0 
)
console.log(`# evens = ${evens}`);
