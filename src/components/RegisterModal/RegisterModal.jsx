import React from "react";
import { Input } from "./../Input";
import Button from "./../Button";
import Select from "../Select";
import regImg from "./regImg.jpg";

const RegisterModal = ({ visible, onClose }) => {
  const handleOnClose = (e) => {
    if (e.target.id === "container") onClose();
  };
  if (!visible) return null;
  const prim = [
    {
      id: "1",
      value: "Пример 1",
      znach: "Пример 1",
    },
    {
      id: "2",
      value: "Пример 2",
      znach: "Пример 2",
    },
  ];
  return (
    <div
      onClick={handleOnClose}
      id="container"
      className="fixed inset-0 backdrop-blur flex justify-center items-center"
    >
      <div className="grid col-start-1 col-end-5 row-start-1 row-end-8 ">
        {<img className={"w-[500px] h-[500px]"} src={regImg} alt="#" />}
      </div>
      <div className="grid grid-cols-[24] grid-rows-[10] w-[900px] h-[500px]  shadow-xl bg-white ">
        <div className=" text-xl grid justify-center items-center col-start-10 col-end-[25] row-start-1 row-end-2 ">
          <label>Регистрация</label>
        </div>
        <div className="grid justify-center col-start-10 col-end-[14] row-start-3 row-end-[8]">
          {
            <Input label={"Придумайте логин"} type={"text"}>
              Логин
            </Input>
          }
          {
            <Input label={"Придумайте parol"} type={"password"}>
              {" "}
              Пароль{" "}
            </Input>
          }
          {
            <Input label={"Подтвердите parol"} type={"password"}>
              {" "}
              Пароль{" "}
            </Input>
          }
          {
            <Input label={"Эл. почта"} type={"text"}>
              {" "}
              Эл. почта{" "}
            </Input>
          }
        </div>

        <div className="grid justify-center col-start-[15] col-end-[19] row-start-3 row-end-[8]">
          {<Select label={"Выберите ВУЗ"} v={prim} defv={"Ваш ВУз"}></Select>}
          {
            <Select
              label={"Выберите Факультет"}
              v={prim}
              defv={"Ваш Факультет"}
            ></Select>
          }
          {
            <Select
              label={"Выберите Направление"}
              v={prim}
              defv={"Ваше Направление"}
            ></Select>
          }
          {
            <Select
              label={"Выберите Группу"}
              v={prim}
              defv={"Ваша Группа"}
            ></Select>
          }
        </div>

        <div className="grid justify-center col-start-[20] col-end-[24] row-start-3 row-end-[8]">
          {
            <Input label={"Введите Имя"} type={"text"}>
              Ваше имя
            </Input>
          }
          {
            <Input label={"Введите Фамилию"} type={"password"}>
              Ваша фамилия
            </Input>
          }
          {
            <Input label={"Введите Отчество"} type={"password"}>
              Ваше отчество
            </Input>
          }
          {
            <Input label={"Введите дату рождения"} type={"text"}>
              Ваша дата рождения
            </Input>
          }
        </div>

        <div className="grid justify-center content-center col-start-[15] col-end-[19] row-start-[8] row-end-[11] ">
          {
            <Button height={"h-10"} width={"w-96"} color={"bg-blue-800"}>
              {" "}
              Диманова кнопка
            </Button>
          }
        </div>
      </div>
    </div>
  );
};

export default RegisterModal;
