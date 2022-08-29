import { ReactNode, useEffect, useState } from "react";

type ButtonProps = {
  children: ReactNode;
  onClick: () => void;
  readonly?: boolean;
};

const Button = ({ children, onClick, readonly = false }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={readonly}
      className={`
        flex justify-center items-center w-full sm:w-32 md:ml-2 border font-semibold
        bg-slate-900 text-white px-4 py-2 rounded-md 
        disabled:bg-slate-300 disabled:text-slate-400 disabled:border-slate-400
        hover:bg-slate-200 hover:text-slate-900 hover:border-slate-900
      `}
    >
      {children}
    </button>
  );
};

export default Button;
