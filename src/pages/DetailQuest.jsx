import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DiscItem from "../components/DiscItem";
import CommentBlock from "../components/CommentBlock";
import { QuestsService } from "../services/quests.service";
import { Link } from "react-router-dom";
import backphoto from "./1.png";

const DetailQuest = () => {
  const { id } = useParams(); //достаем айди из ссылки Link

  const [quest, setQuest] = useState({});
  const [answers, setAnswers] = useState([]);
  useEffect(() => {
    if (!id) return;
    const getData = async () => {
      const data = await QuestsService.getById(id);
      setQuest(data);
      const answ = await QuestsService.getAnswersById(id);
      setAnswers(answ);
    };
    getData();
  }, []);
  return (
    <div
      style={{
        backgroundImage: `url("${backphoto}")`,
      }}
      className={`flex items-center flex-col h-[87vh]`}
    >
      <Link to="/cifr">
        <button
          className={`h-10 w-96 bg-blue-800 text-white rounded flex justify-center items-center m-2`}
        >
          Назад к обсуждениям
        </button>
      </Link>
      <div>
        <DiscItem
          key={quest.id}
          person={quest.person}
          group={quest.group}
          name={quest.name}
          date={quest.date}
          description={quest.description}
        ></DiscItem>
      </div>
      <div className="m-4">ТУТ ДОЛЖНО БЫТЬ ДОБАВЛЕНИЕ КОММЕНТОВ</div>
      <div className="m-4">
        {answers.length === 0 ? (
          <p className="text-3xl bold">Тут еще нет комментов👉👈🏿</p>
        ) : (
          answers.map((m) => {
            return (
              <CommentBlock
                key={m.id}
                person={m.person}
                group={m.group}
                date={m.date}
                description={m.description}
              ></CommentBlock>
            );
          })
        )}
      </div>
    </div>
  );
};

export default DetailQuest;
