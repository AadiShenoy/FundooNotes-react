import axios from "axios";

const post = (requestObject) => {
  return axios({
    method: requestObject.method,
    url: requestObject.url,
    headers: requestObject.headers,
    data: requestObject.data,
  });
};

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default { post };
