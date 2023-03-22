import React, { useEffect, useState } from "react";
import TitleCifr from "./../components/TitleCifr";
import backphoto from "./1.png";
import DiscItem from "../components/DiscItem";
import { Link } from "react-router-dom";
import { QuestsService } from "../services/quests.service";

const Cifr = () => {
  const [quests, setQuests] = useState([]);

  useEffect(() => {
    const getQuests = async () => {
      const data = await QuestsService.getAll();
      setQuests(data);
    };
    getQuests();
  }, []);
  return (
    <div
      style={{
        backgroundImage: `url("${backphoto}")`,
      }}
      className={`flex items-center flex-col h-[87vh]`}
    >
      <TitleCifr setQuests={setQuests}></TitleCifr>
      {quests.length ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 mb-5">
          {quests.map((m) => {
            return (
              <Link key={m.id} to={`/cifr/${m.id}`}>
                <DiscItem
                  key={m.id}
                  person={m.person}
                  group={m.group}
                  name={m.name}
                  date={m.date}
                  description={m.description}
                ></DiscItem>
              </Link>
            );
          })}
        </div>
      ) : (
        <p>Нет постов</p>
      )}
    </div>
  );
};

export default Cifr;
