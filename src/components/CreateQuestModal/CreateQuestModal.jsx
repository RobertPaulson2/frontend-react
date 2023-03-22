import React, { useState } from "react";

const CreateQuestModal = ({ visible, onClose, setQuests }) => {
  // const current = new Date();
  // const date = `${current.getDate()}.${
  //   current.getMonth() + 1
  // }.${current.getFullYear()}`;
  const [data, setData] = useState({
    name: "",
    description: "",
    date: "",
  });

  const handleOnClose = (e) => {
    if (e.target.id === "container") onClose();
  };
  if (!visible) return null;

  const createQuest = (e) => {
    e.preventDefault();
    setQuests((prev) => [{ id: prev.length + 1, ...data }, ...prev]);
    setData({
      name: "",
      description: "",
      date: "",
    });
    onClose();
  };
  return (
    <div
      onClick={handleOnClose}
      id="container"
      className="fixed inset-0 backdrop-blur flex justify-center items-center"
    >
      <form
        className="w-[80%] h-[20rem] rounded p-4 flex items-start flex-col bg-white"
        action=""
      >
        <label>Придумайте вопрос</label>
        <input
          value={data.name}
          onChange={(e) =>
            setData((prev) => ({ ...prev, name: e.target.value }))
          }
          className={`w-[90%] border border-gray-300 text-gray-900 text-sm rounded-sm block p-2.5`}
          placeholder="ВОПРОС"
          type="text"
        ></input>
        <label>ОПИШИТЕ ПРОБЛЕМУ</label>
        <textarea
          value={data.description}
          onChange={(e) =>
            setData((prev) => ({ ...prev, description: e.target.value }))
          }
          className="rounded-xl border-purple-700 border-2"
          rows="5"
          cols="80"
          id="TITLE"
        ></textarea>
        <input //это пока неважно
          value={data.date}
          onChange={(e) =>
            setData((prev) => ({ ...prev, date: e.target.value }))
          }
          placeholder="время"
          type="date"
        ></input>
        <button
          className={`h-8 w-40 bg-blue-800 text-white rounded flex justify-center items-center mt-2`}
          onClick={(e) => createQuest(e)}
        >
          Создать обсуждение
        </button>
      </form>
    </div>
  );
};

export default CreateQuestModal;
