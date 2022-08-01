import "./Button.scss";
import { HTMLProps, ReactNode } from "react";

interface ButtonProps extends HTMLProps<HTMLButtonElement> {
  type?: "delete" | "secondary" | "primary";
  children: ReactNode;
}
const buttonTypeClassName = {
  delete: "button-delete",
  secondary: "button-secondary",
  primary: "button-primary",
};
export const Button = ({
  onClick,
  children,
  type = "primary",
}: ButtonProps) => {
  const className = ["button"];
  className.push(buttonTypeClassName[type]);
  return (
    <button className={className.join(" ")} onClick={onClick}>
      {children}
    </button>
  );
};
