import React from "react";
import Sun from "../assets/images/icon-sun.svg";
import Moon from "../assets/images/icon-moon.svg";

const Header = ({ theme, onChangeTheme = () => {} }) => {
  const currentTheme = theme ? Sun : Moon;

  return (
    <header className="flex items-center justify-between mb-12">
      <h1 className="text-3xl text-white uppercase tracking-widest font-bold">
        Todo
      </h1>
      <button type="button" onClick={onChangeTheme}>
        <img src={currentTheme} alt="light theme" />
      </button>
    </header>
  );
};

export default Header;
