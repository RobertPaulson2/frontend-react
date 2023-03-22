import React, { useState, useContext, memo } from "react";
import Button from "./Button";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { NavLink } from "react-router-dom";
import LoginModal from "./LoginModal/LoginModal";
import RegisterModal from "./RegisterModal/RegisterModal";
import { AuthContext } from "../providers/AuthProvider";

const Navbar = () => {
  const { user, setUser } = useContext(AuthContext);

  const [showLoginModal, setShowLoginModal] = useState(false);
  const handleLoginClose = () => setShowLoginModal(false);

  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const handleRegisterClose = () => setShowRegisterModal(false);

  const [nav, setNav] = useState(false);
  const [active, setActive] = useState(false);
  const [active1, setActive1] = useState(false);
  const handleClick = () => setNav(!nav);
  function handleActive() {
    if (active) {
    } else setActive(!active);
    setActive1(false);
  }
  function handleActive1() {
    if (active1) {
    } else setActive1(!active1);
    setActive(false);
  }
  return (
    <div>
      <div className="h-[8vh] bg-blue-500  drop-shadow-lg">
        <div className="px-2 flex justify-around items-center w-full h-full">
          <div className="flex items-center">
            <h1 className="text-3xl font-bold mr-4 sm:text-4xl">ЕПС</h1>
            <ul className="hidden md:flex">
              <li onClick={handleActive}>
                <NavLink to="/agr">
                  <Button
                    height={"h-16"}
                    width={"w-28"}
                    color={"bg-blue-300"}
                    active={active}
                  >
                    Новостной агрегатор
                  </Button>
                </NavLink>
              </li>
              <li onClick={handleActive1}>
                <NavLink to="/cifr">
                  <Button
                    height={"h-16"}
                    width={"w-28"}
                    color={"bg-blue-300"}
                    active={active1}
                  >
                    Цифровой помощник
                  </Button>
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="hidden md:flex pr-4">
            {user ? (
              <div>
                <p>
                  {user.name} {user.surname}
                </p>
                <Button onClick={() => setUser(null)}>ВЫйти</Button>
              </div>
            ) : (
              <div>
                <button
                  onClick={() => setShowLoginModal(true)}
                  className="border-none bg-transparent text-black mr-4"
                >
                  Зацти
                </button>
                <button
                  onClick={() => setShowRegisterModal(true)}
                  className="px-8 py-3"
                >
                  Зарегацца
                </button>
              </div>
            )}
          </div>
          <div onClick={handleClick} className="md:hidden mr-4 ">
            {!nav ? <MenuIcon className="w-5" /> : <XIcon className="w-5" />}
          </div>
        </div>

        <ul className={!nav ? "hidden" : "absolute bg-zinc-200 w-full px-8"}>
          <li className="border-b-2 border-zinc-300 w-full">
            Новостной агрегатор
          </li>
          <li className="border-b-2 border-zinc-300 w-full">
            Цифровой помощник
          </li>
          <div className="flex flex-col my-4">
            <button className="bg-transparent text-indigo-600 px-8 py-3 mb-4">
              Зацти
            </button>
            <button className="px-8 py-3">Зарегацца</button>
          </div>
        </ul>
      </div>
      <LoginModal
        onClose={handleLoginClose}
        visible={showLoginModal}
      ></LoginModal>
      <RegisterModal
        onClose={handleRegisterClose}
        visible={showRegisterModal}
      ></RegisterModal>
    </div>
  );
};

export default memo(Navbar);
