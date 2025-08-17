import React from "react";

const ErrorMessage = ({ type, text }) => {
  let style = "text-center p-4 rounded-lg mt-4 ";

  if (type === "error") {
    style += "bg-red-100 text-red-600";
  } else if (type === "empty") {
    style += "bg-yellow-100 text-yellow-600";
  } else {
    style += "bg-gray-100 text-gray-600";
  }

  return <div className={style}>{text}</div>;
};

export default ErrorMessage;
