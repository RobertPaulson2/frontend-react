// import React from "react";
// import Button from "./../components/Button";
// import DiscItem from "../components/DiscItem";
// import f from "./1.png";
// import Select from "../components/Select";
// import { Input } from "../components/Input";
// import CommentBlock from "./../components/CommentBlock";
// import Search from "../components/Search";

// const course = [
//   {
//     id: "1",
//     value: "1",
//     znach: "1",
//   },
//   {
//     id: "2",
//     value: "2",
//     znach: "2",
//   },
//   {
//     id: "3",
//     value: "3",
//     znach: "3",
//   },
// ];
// const predmet = [
//   {
//     id: "1",
//     value: "Java",
//     znach: "Java",
//   },
//   {
//     id: "2",
//     value: "C++",
//     znach: "C++",
//   },
// ];
// const KitPage = () => {
//   //https://jsonplaceholder.typicode.com/posts?_limit=10&_page=1
//   return (
//     <div
//       style={{
//         backgroundImage: `url("${f}")`,
//       }}
//       className={`flex items-center flex-col min-h-[80%]`}
//     >
//       <div className="p-4">
//         <Button height={"h-16"} width={"w-28"} color={"bg-blue-300"}>
//           default
//         </Button>
//       </div>
//       <div className="p-4">
//         <Button height={"h-10"} width={"w-96"} color={"bg-blue-800"}>
//           Диманова кнопка
//         </Button>
//       </div>
//       <div className="p-4">
//         <Search></Search>
//       </div>
//       <div className="p-4 flex">
//         <Select label={"Курс"} v={course} defv={"Выберите"}></Select>
//         <Select label={"Предмет"} v={predmet} defv={"Выберите"}></Select>
//       </div>
//       <div className="p-4 flex">
//         <Input label={"Придумайте логин"} type={"text"}>
//           Логин
//         </Input>
//         <Input label={"Придумайте пароль"} type={"password"}>
//           Пароль
//         </Input>
//       </div>
//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20">
//         {Agregator.map((m) => {
//           return (
//             <DiscItem
//               key={m.id}
//               person={m.person}
//               group={m.group}
//               name={m.name}
//               date={m.date}
//               description={m.description}
//             ></DiscItem>
//           );
//         })}
//       </div>
//       <div className="p-4">
//         {Agregator.map((m) => {
//           return (
//             <CommentBlock
//               key={m.id}
//               person={m.person}
//               group={m.group}
//               name={m.name}
//               date={m.date}
//               description={m.description}
//             ></CommentBlock>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default KitPage;
