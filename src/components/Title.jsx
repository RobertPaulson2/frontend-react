import React from "react";
import Button from "./Button";
import { Input } from "./Input";

const Title = () => {
  return (
    <div className="p-5 bg-white">
      <div className=" grid grid-cols-3 grid-rows-3 p-2 rounded-2xl shadow-2xl">
        <div className="grid col-start-1 col-end-3 row-start-1 row-end-1 justify-center text-3xl font-bold mr-4 sm:text-2xl">
          Новости
        </div>
        <div className="grid col-start-3 col-end-3 row-start-1 row-end-2">
          <Input></Input>
        </div>
        <div className="grid col-start-1 col-end-5 row-start-3 row-end-3 justify-center">
          <Button height={"h-7"} width={"w-80"} color={"bg-blue-500"}>
            Создать новость
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Title;
