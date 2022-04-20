fetch("https://randomuser.me/api/?results=6")
  .then(response => response.json())  // Get response body stream
  .then(responseBody => {
    const profiles = responseBody.results;
    profiles.forEach( profile => {
      console.log(`${profile.name.title} ${profile.name.first} ${profile.name.last}`)
    });
  })
  .catch(function(err) {
    console.log(err);
  });
 