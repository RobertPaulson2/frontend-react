import React from "react";

function CommentBlock({ person, group, description, date }) {
  return (
    <div className="grid grid-cols-6 grid-rows-7 w-450 h-[175px] p-3 rounded-xl shadow-xl bg-white mb-4">
      <div className="grid text-gray-400 justify-center col-start-1 col-end-4 row-start-1 row-end-2 ">
        {person} {group}
      </div>

      <div className="grid justify-center col-start-5 col-end-6 row-start-1 row-end-2 ">
        {date}
      </div>

      <div className="grid justify-center col-start-1 col-end-7 row-start-3 row-end-6">
        {description}
      </div>

      <button className="grid justify-center col-start-1 col-end-2 row-start-7 row-end-7">
        Ответить
      </button>
      <button className="grid justify-center col-start-2 col-end-4 row-start-7 row-end-7">
        Пожаловаться
      </button>
    </div>
  );
}

export default CommentBlock;
