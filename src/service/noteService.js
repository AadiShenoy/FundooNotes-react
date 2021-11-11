import AxiosHelper from "../helper/axios";
const url = require("../config/local");

const getNotes = () => {
  const token = localStorage.getItem("token");
  let reqobj = {
    method: "get",
    url: url.baseURL + "/notes",
    headers: {
      Authorization: `bearer ${token}`,
    },
  };
  return AxiosHelper.get(reqobj)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      throw err;
    });
};

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {getNotes };
