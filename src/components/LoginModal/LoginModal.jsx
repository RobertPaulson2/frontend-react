import React, { useContext, useState } from "react";
import Button from "../Button";
import { AuthContext } from "./../../providers/AuthProvider";

const LoginModal = ({ visible, onClose }) => {
  const { user, setUser } = useContext(AuthContext);
  const [data, setData] = useState({
    name: "",
    surname: "",
  });
  const handleOnClose = (e) => {
    if (e.target.id === "container") onClose();
  };
  if (!visible) return null;
  return (
    <div
      onClick={handleOnClose}
      id="container"
      className="fixed inset-0 backdrop-blur flex justify-center items-center"
    >
      <div className="bg-white p-3 rounded">
        <input
          value={data.name}
          onChange={(e) =>
            setData((prev) => ({ ...prev, name: e.target.value }))
          }
          className={`w-[90%] border border-gray-300 text-gray-900 text-sm rounded-sm block p-2.5`}
          placeholder="Логин"
          type="text"
        ></input>
        <input
          value={data.surname}
          onChange={(e) =>
            setData((prev) => ({ ...prev, surname: e.target.value }))
          }
          className={`w-[90%] border border-gray-300 text-gray-900 text-sm rounded-sm block p-2.5`}
          placeholder="Фамилия пока"
          type="text"
        ></input>
        <Button
          onClick={(e) => setUser(data)}
          height={"h-10"}
          width={"w-96"}
          color={"bg-blue-800"}
        >
          Диманова кнопка
        </Button>
      </div>
    </div>
  );
};

export default React.memo(LoginModal);
