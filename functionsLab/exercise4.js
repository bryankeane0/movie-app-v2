fetch("https://jsonplaceholder.typicode.com/todos")
  .then((response) => response.json())
  .then((json) => {
    const totalCompleted = json.reduce((total, todo, index, array) => {
      if (todo.completed == true) {
        return total + 1;
      } else {
        return total;
      }
    }, 0);
    console.log(`Total completed todos = ${totalCompleted}`);
  })
  .catch(function (err) {
    console.log(err);
  });
