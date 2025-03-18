import React, { ReactNode } from "react";
import MenuPanel from "../fragments/MenuPanel";
import Navbar from "../fragments/Navbar";

interface AdminPanelProps {
  children: ReactNode;
  className?: string;
}

const AdminPanel: React.FC<AdminPanelProps> = ({ children, className }) => {
  return (
    <>
      <div className={`flexc font-inter`}>
        <MenuPanel />
        <div
          className={`flex-[1] flexc flex-col !justify-start h-screen overflow-hidden`}
        >
          <Navbar />
          <div className={`p-5 ${className}`}>{children}</div>
        </div>
      </div>
    </>
  );
};

export default AdminPanel;
