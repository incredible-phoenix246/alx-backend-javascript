import getFullResponseFromAPI from "./1-promise.js";

console.log(getFullResponseFromAPI(true));
console.log(getFullResponseFromAPI(false));

// Handling promises
getFullResponseFromAPI(true)
  .then((response) => {
    console.log("Resolved:", response);
  })
  .catch((error) => {
    console.error("Rejected:", error);
  });

getFullResponseFromAPI(false)
  .then((response) => {
    console.log("Resolved:", response);
  })
  .catch((error) => {
    console.error("Rejected:", error);
  });
