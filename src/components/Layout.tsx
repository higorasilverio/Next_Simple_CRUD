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
      flex flex-col w-2/3
      bg-white text-slate-700
      rounded-md
    `}
    >
      <Title>{title}</Title>
      <div className="p-5">{children}</div>
    </div>
  );
};

export default Layout;
