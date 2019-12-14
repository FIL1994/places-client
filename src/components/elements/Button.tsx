import React from "react";
import { getIcon } from "../../utils/iconUtils";
import "./button.less";

interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  [key: string]: any;
  as?: React.ReactType | React.ComponentType;
  icon?: React.ReactNode | React.ComponentType;
}

const Button: React.FC<ButtonProps> = ({
  as: ButtonComponent = "span",
  icon,
  children,
  className = "",
  ...props
}) => {
  return (
    <ButtonComponent
      role="button"
      tabIndex={0}
      type="button"
      {...props}
      className={`places-btn ${className}`}
    >
      {icon && getIcon(icon)}
      <div>{children}</div>
    </ButtonComponent>
  );
};

export default Button;
