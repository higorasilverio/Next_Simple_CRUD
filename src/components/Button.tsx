import { ReactNode, useEffect, useState } from "react";

type ButtonProps = {
  children: ReactNode;
  onClick: () => void;
};

const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`
        flex justify-evenly items-center w-32 ml-2 border font-semibold
        bg-slate-900 text-white px-4 py-2 rounded-md 
        hover:bg-slate-200 hover:text-slate-900 hover:border-slate-900
      `}
    >
      {children}
    </button>
  );
};

export default Button;
