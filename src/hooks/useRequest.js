// import { message } from "antd";
const { REACT_APP_BASE_URL } = process.env;

export const useRequest = () => {
  // const success = () => {
  //   message.open({
  //     type: "success",
  //     content: "Successfully logged in",
  //   });
  // };
  // const warning = (error) => {
  //   message.open({
  //     type: "warning",
  //     content: error || "Something went wrong",
  //   });
  // };

  const request = async ({ me, url, method = "GET", body, token, headers }) => {
    if (method === "POST") headers["Content-Type"] = "application.json";
    if (token)
      headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
    const options = {
      method,
      headers,
      body: JSON.stringify(body),
    };
    try {
      let res = await fetch(
        `${
          me ? "https://houzing-app.herokuapp.com/api" : REACT_APP_BASE_URL
        }${url}`,
        options
      ).then((res) => res.json());
      return res;
    } catch (error) {
      // warning(error);
      return error;
    }
  };
};

export default useRequest;
