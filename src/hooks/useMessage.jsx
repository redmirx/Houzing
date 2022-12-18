import { message } from "antd";

export const success = (text) => {
  message.open({
    type: "success",
    content: text,
  });
};
export const info = (text) => {
  message.open({
    type: "info",
    content: text,
  });
};
export const warning = (text) => {
  message.open({
    type: "warning",
    content: text,
  });
};
export const error = (text) => {
  message.open({
    type: "error",
    content: text,
  });
};
