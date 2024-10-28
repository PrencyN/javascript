function fetchData(callback) {
    setTimeout(() => {
      console.log("Data fetched");
      callback({ user: "John", age: 30 });
    }, 2000);
  }
  
  fetchData((data) => {
    console.log("User:", data.user);
  });
  
  /* Output:
  Data fetched
  User: John
  */