import React from "react";

const Toggle = ({isEnglish, toggleLanguage}) => {
  return (
    <button 
    className='bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl'
    onClick={toggleLanguage}>
      {isEnglish ? "Français" : "English"}
    </button>
  );
};

export default Toggle;
