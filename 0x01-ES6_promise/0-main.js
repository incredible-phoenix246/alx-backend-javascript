import signUpUser from "./4-user-promise.js";

const promise = signUpUser("Bob", "Dylan");

promise.then((user) => {
  console.log(user);
});

// Alternatively, you can log the promise itself to see the output
console.log(promise);
