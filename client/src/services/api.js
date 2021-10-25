import axios from "axios";

export function getRestaurants() {
  return axios
    .get("https://restaurants-in-yerevan.herokuapp.com/")
    .then((res) => {
      console.log(res);
      return res;
    })
    .catch((err) => console.log(err));
}

export function getRestaurant(id) {
  return axios
    .get(`https://restaurants-in-yerevan.herokuapp.com/${id}`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log(err));
}

export function addRestaurant(data) {
  return axios
    .post("https://restaurants-in-yerevan.herokuapp.com/", data)
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log(err));
}

export function addComment(id, data) {
  return axios
    .post(`https://restaurants-in-yerevan.herokuapp.com/comment/${id}`, data)
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log(err));
}
