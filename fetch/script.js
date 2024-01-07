const promise = new Promise((resolve, reject) => {
  // Some Async Operation
  setTimeout(() => {
    let isActive = false;

    const player = { name: "Federer", sport: "Tennis" };
    if (isActive) {
      resolve(player);
    } else {
      reject("Oops! Player is not active");
    }
  }, 1000);
});

promise
  .then(function (res) {
    console.log("Player info ", res);
  })
  .catch(function (err) {
    console.log(err);
  });

// Getting HTTP Response

// Using Aysnc Await

// async function getUsers(){

//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//         const data = await response.json(); // Yup! This also takes time
//         console.log(data);
//     } catch (error) {

//         console.log('Error  ',error);
//     }
// }

// getUsers();

// Using Promise then, catch and finally

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((er) => {
    console.log("Something went wrong");
  })
  .finally((result) => {
    console.log("Data came or failed");
  });
