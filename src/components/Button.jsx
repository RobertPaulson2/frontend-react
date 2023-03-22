import React from "react";

const Button = ({ height, width, color, hover, children, active, onClick }) => {
  return active ? (
    <button
      onClick={onClick}
      className={`${hover} ${height} ${width} text-white  bg-cyan-500 rounded-xl flex justify-center items-center`}
    >
      {children}
    </button>
  ) : (
    <button
      onClick={onClick}
      className={`${hover} ${height} ${width}  ${color} text-white rounded-xl flex justify-center items-center`}
    >
      {children}
    </button>
  );
};

export default Button;
