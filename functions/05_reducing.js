fetch("https://randomuser.me/api/?results=10")
.then(response => response.json())  // Get response body stream
.then(responseBody => {
    const profiles = responseBody.results; 
    console.log(profiles);

    // Objective: Calculate average age of profiles.
    // Old approach
    // const profilesAges = profiles.map(profile => profile.dob.age);
    // let ageAccumulator = 0;
    // for (let i = 0; i < profiles.length; i++) {
    //   ageAccumulator += profiles[i].dob.age;
    // }
    // console.log(`Average age =  ${Math.round(ageAccumulator/ profiles.length)}`);

    const ageAccumulator = profiles.reduce( (total, profile, index, array) => {
         return total + profile.dob.age
     }, 0)
    console.log(`Average age =  ${Math.round(ageAccumulator/ profiles.length)}`);

    // // Objective: Find youngest profile..
    // const youngest = profiles.reduce( (min, profile) => {
    //     const newMin = profile.dob.age < min ?  profile.dob.age : min
    //     // console.log(newMin )
    //     return newMin
    // },100 )
    // console.log(`Youngest = ${youngest}`)

    // // Objective: Compute no. of profiles in each age groups.
    // const ageGroups = {
    //   '25-': 0,
    //   '26-50': 0,
    //   '51-75': 0,
    //   '76+': 0
    // };
    // const ageCategories = Object.keys(ageGroups);
    // // console.log(ageCategories);

    // const categorizByAge = age => {
    //   let ageCategory;
    //   if (age < 26) ageCategory = ageCategories[0];
    //   else if (age < 51) ageCategory = ageCategories[1];
    //   else if (age < 76) ageCategory = ageCategories[2];
    //   else ageCategory = ageCategories[3];
    //   return ageCategory;
    // };
    // const profilesByAgeGroups = profiles.reduce((acc, profile) => {
    //   const key = categorizByAge(profile.dob.age);
    //   acc[key] += 1;
    //   return acc;
    // }, ageGroups);
    // console.log(profilesByAgeGroups);
  })
  .catch(function(err) {
    console.log(err);
  });
