import React, { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  onClick = () => {},
}) => {
  return (
    <>
      <button
        onClick={(event) => {
          event.preventDefault();
          onClick();
        }}
        className={`px-4 py-2 shadow rounded-lg scale-100 active:scale-95 transall ${className}`}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
