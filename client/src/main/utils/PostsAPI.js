import { generateRandomId } from "./Utils";
import "whatwg-fetch";

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

export const editPost = post => {
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
  }).then(res => res.json());
};

export const remove = (post, option) => {
  return fetch(`${api}/posts/${post.id}`, {
    method: 'DELETE',
    headers
  }).then(res => res.json());
};

export const createPost = ({ title, body, author, category }) => {
  const data = {
    id: generateRandomId(),
    timestamp: new Date().getTime(),
    title,
    body,
    author,
    category
  };

  return fetch(`${api}/posts`, {
    method: "POST",
    headers: {
      ...headers,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  }).then(res => res.json());
};

export const getCategories = () => {
  return fetch(`${api}/categories`, { headers }).then(res => res.json());
};

export const getPostByCategory = category => {
  return fetch(`${api}/${category}/posts`, { headers }).then(res => res.json());
};

export const get = postId => {
  return fetch(`${api}/posts/${postId}`, { headers }).then(res => res.json());
};

/*--- Comment ---*/
export const getPostComments = post => {
  return fetch(`${api}/posts/${post.id}/comments`, { headers }).then(res =>
    res.json()
  );
};

export const updateCommentScore = (comment, option) => {
  return fetch(`${api}/comments/${comment.id}`, {
    method: `post`,
    headers: {
      ...headers,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ option })
  }).then(res => res.json());
};

export const postComment = (post, comment) => {
  const data = {
    id: generateRandomId(),
    timestamp: new Date().getTime(),
    body: comment.body,
    author: comment.author,
    parentId: post.id
  };
  return fetch(`${api}/comments`, {
    method: "POST",
    headers: {
      ...headers,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  }).then(res => res.json());
};

export const editComment = comment => {
  return fetch(`${api}/comments/${comment.id}`, {
    method: "PUT",
    headers: {
      ...headers,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ body: comment.body })
  }).then(res => res.json());
};

export const deleteComment = comment => {
  return fetch(`${api}/comments/${comment.id}`, {
    method: "DELETE",
    headers
  }).then(res => res.json());
};