import { ReactNode } from "react";

const Title = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col justify-center">
      <h1 className="text-3xl p-5">{children}</h1>
      <hr className="border-2 border-slate-700" />
    </div>
  );
};

export default Title;
