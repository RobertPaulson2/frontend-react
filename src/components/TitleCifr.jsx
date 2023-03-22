import React, { useState } from "react";
import Button from "./Button";
import { Input } from "./Input";
import CreateQuestModal from "./CreateQuestModal/CreateQuestModal";

const TitleCifr = ({ setQuests }) => {
  const [showCreateNewsModal, setShowCreateNewsModal] = useState(false);
  const handleCreateNewsClose = () => setShowCreateNewsModal(false);
  return (
    <div className="my-10 bg-white w-8/12">
      <div className=" grid grid-cols-3 grid-rows-3 p-2 rounded-2xl shadow-2xl">
        <div className="grid col-start-1 col-end-3 row-start-1 row-end-1 justify-center text-3xl font-bold mr-4 sm:text-2xl">
          Обсуждения
        </div>
        <div className="grid col-start-3 col-end-3 row-start-1 row-end-2">
          <Input></Input>
        </div>
        <div className="grid col-start-1 col-end-5 row-start-3 row-end-3 justify-center">
          <button
            className={`h-10 w-96 bg-blue-800 text-white rounded flex justify-center items-center mt-2`}
            onClick={() => setShowCreateNewsModal(true)}
          >
            Создать обсуждение
          </button>
        </div>
        <CreateQuestModal
          onClose={handleCreateNewsClose}
          visible={showCreateNewsModal}
          setQuests={setQuests}
        ></CreateQuestModal>
      </div>
    </div>
  );
};

export default TitleCifr;
