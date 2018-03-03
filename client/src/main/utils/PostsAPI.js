import { generateRandomId } from "./Utils";

const api = "http://localhost:5001";

//Generate a unique token for storing your data on the backen server

let token;

try {
  token = localStorage.token;
  if (!token) {
    token = localStorage.token = Math.random()
      .toString(36)
      .substr(-8);
  }
} catch (error) {
  console.warn("Failed to init token due to an error!mock token instead...");
  token = "testToken";
}

const headers = {
  Accept: "application/json",
  Authorization: token
};

export const getAll = () => {
  return fetch(`${api}/posts`, { headers }).then(res => res.json());
};

export const get = postId => {
  return fetch(`${api}/posts/${postId}`, { headers }).then(res => res.json());
};
