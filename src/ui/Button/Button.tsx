import { FC, HTMLAttributes } from "react";
import style from "./Button.module.scss";
import { classNames } from "../../utils/classNames";

interface IButtonProps extends HTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  isDisabled?: boolean;
  kind?: "primary" | "secondary";
  type?: "submit" | "reset" | "button";
  className?: string;
}

export const Button: FC<IButtonProps> = ({
  isLoading,
  isDisabled = isLoading,
  children,
  className = '',
  kind = "primary",
  type,
  ...props
}) => {
  return (
    <button
      disabled={isDisabled}
      type={type}
      className={classNames(style.btn, {}, [className])}
      data-kind={kind}
      {...props}
    >
      {children}
      {/* {isLoading ? <LoaderButton />  : children} */}
    </button>
  );
};
