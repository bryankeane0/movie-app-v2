fetch("https://randomuser.me/api/?results=10")
.then(response => response.json())  // Get response body stream
.then(responseBody => {
    const profiles = responseBody.results;
    console.log(profiles);

    // Objective: Find the female profiles
    // Old approach
    // const femaleProfiles = [];
    // for (let i = 0; i < profiles.length; i++) {
    //   if (profiles[i].gender === "female") {
    //     femaleProfiles.push(profiles[i]);
    //   }
    // }
    const femaleProfiles = profiles.filter((profile, index) => {
      console.log(`${index} - ${profile.gender} `);
      return profile.gender === "female";
    });
    console.log(femaleProfiles);

    // Objective: Find males under 40 years
    const under40Males = profiles.filter(
      profile => profile.gender === 'male' && profile.dob.age < 40
    );
    console.log(under40Males);
  })
  .catch(function(err) {
    console.log(err);
  });
