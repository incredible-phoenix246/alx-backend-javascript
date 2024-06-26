import signUpUser from "./4-user-promise.js";
import uploadPhoto from "./5-photo-reject.js";

function handleProfileSignup(firstName, lastName, fileName) {
  const promises = [
    signUpUser(firstName, lastName).then((value) => ({
      status: "resolved",
      value,
    })),
    uploadPhoto(fileName).catch((error) => ({
      status: "rejected",
      value: error,
    })),
  ];

  return Promise.all(promises);
}
export default handleProfileSignup;
