import { ReactNode } from "react";

const Title = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col justify-center">
      <h1 className="text-2xl sm:text-3xl font-bold p-5 sm:text-left text-center">
        {children}
      </h1>
      <hr className="border-2 border-slate-700" />
    </div>
  );
};

export default Title;
