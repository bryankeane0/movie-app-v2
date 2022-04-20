fetch("https://randomuser.me/api/?results=10")
.then(response => response.json())  // Get response body stream
.then(responseBody => {
    const profiles = responseBody.results; 
    console.log(profiles);

    // Objective - Create array of profiles' email addresses
    // Old approach
    // const profileEmails = [];
    // for (let i = 0; i < profiles.length; i++) {
    //   const entry = {
    //     name: `${profiles[i].name.first} ${profiles[i].name.last}`,
    //     email: profiles[i].email
    //   };
    //   profileEmails.push(entry);
    // }

    const profileEmails = profiles.map( profile => {
      return {
        name: `${profile.name.first} ${profile.name.last}`,
        email: profile.email,
      };
    });
    console.log(profileEmails);

    // Objective - Create array with profiles' ages
    const profileAges = profiles.map(profile => profile.dob.age);
    console.log(profileAges);
  })
  .catch(function(err) {
    console.log(err);
  });
