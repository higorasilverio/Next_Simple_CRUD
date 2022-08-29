import { ReactNode } from "react";
import Title from "./Title";

type LayoutProps = {
  title: string;
  children: ReactNode;
};

const Layout = ({ children, title }: LayoutProps) => {
  return (
    <div
      className={`
      flex flex-col w-11/12 sm:w-4/5 md:w-2/3
      bg-white text-slate-700
      rounded-md justify-center
    `}
    >
      <Title>{title}</Title>
      <div className="p-2 sm:p-5">{children}</div>
    </div>
  );
};

export default Layout;
