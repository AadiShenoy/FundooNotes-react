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

const setNotes = (data) => {
  const token = localStorage.getItem("token");
  let reqobj = {
    method: "post",
    url: url.baseURL + "/notes",
    headers: {
      Authorization: `bearer ${token}`,
    },
    data: data,
  };
  return AxiosHelper.post(reqobj)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      throw err;
    });
};

const updateNotes = (data, id) => {
  const token = localStorage.getItem("token");
  let reqobj = {
    method: "put",
    url: url.baseURL + "/notes/" + id,
    headers: {
      Authorization: `bearer ${token}`,
    },
    data: data,
  };
  return AxiosHelper.post(reqobj)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      console.log("error occured");
      throw err;
    });
};

const deletNote = (id) => {
  const token = localStorage.getItem("token");
  let reqobj = {
    method: "delete",
    url: url.baseURL + "/notes/" + id,
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

const setImage = (data) => {
  const token = localStorage.getItem("token");
  let reqobj = {
    method: "post",
    url: url.baseURL + "/notes/upload-image",
    headers: {
      Authorization: `bearer ${token}`,
    },
    data: data,
  };
  return AxiosHelper.post(reqobj)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      throw err;
    });
};
/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default { getNotes, setNotes, updateNotes, deletNote, setImage };
