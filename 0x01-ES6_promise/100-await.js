import { uploadPhoto, createUser } from "./utils.js";

async function asyncUploadUser() {
  try {
    const photoPromise = uploadPhoto("guillaume.jpg");
    const userPromise = createUser("Guillaume", "Salva");

    const [photoResponse, userResponse] = await Promise.all([
      photoPromise,
      userPromise,
    ]);

    return {
      photo: photoResponse,
      user: userResponse,
    };
  } catch (error) {
    console.error("Error:", error);
    return {
      photo: null,
      user: null,
    };
  }
}

export default asyncUploadUser;
