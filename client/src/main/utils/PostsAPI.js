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

export const vote = (post, option) => {
  return fetch(`${api}/posts/${post.id}`, {
    method: "POST",
    headers: {
      ...headers,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ option })
  }).then(res => res.json());
};

export const editPost = (post) => {
  return fetch(`${api}/posts/${post.id}`, {
    method: "PUT",
    headers: {
      ...headers,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      title: post.title,
      body: post.body
    })
  }).then(res => res.json);
};
