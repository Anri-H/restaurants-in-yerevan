import axios from "axios";

export function getRestaurants() {
  return axios
    .get("http://localhost:5000/")
    .then((res) => {
      console.log(res);
      return res;
    })
    .catch((err) => console.log(err));
}

export function getRestaurant(id) {
  return axios
    .get(`http://localhost:5000/${id}`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log(err));
}

export function addRestaurant(data) {
  return axios
    .post("http://localhost:5000/", data)
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log(err));
}

export function addComment(id, data) {
  return axios
    .post(`http://localhost:5000/comment/${id}`, data)
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log(err));
}
