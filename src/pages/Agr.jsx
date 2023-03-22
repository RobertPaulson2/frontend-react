import React from "react";
import Title from "./../components/Title";
import backphoto from "./1.png";

const Agr = () => {
  return (
    <div
      style={{
        backgroundImage: `url("${backphoto}")`,
      }}
      className={`flex items-center flex-col h-[87vh]`}
    >
      <div className="flex items-center flex-col min-h-[40rem]">
        <Title></Title>
      </div>
    </div>
  );
};

export default Agr;
