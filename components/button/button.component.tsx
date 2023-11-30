import clsx from "clsx";
import { FC, ReactNode } from "react";
import css from "./button.module.scss";

type Props = {
  children: ReactNode;
  as?: "a" | "button" | "span";
  active?: boolean;
  className?: string;
  thin?: boolean;
  onClick?: () => void;
};

const Button: FC<Props> = (props) => (
  <ButtonBuilder
    as={props.as ?? "a"}
    onClick={props.onClick}
    className={clsx(
      css.button,
      {
        [css.active]: props.active,
        [css.thin]: props.thin,
      },
      props.className
    )}
  >
    {props.children}
  </ButtonBuilder>
);

export default Button;

const ButtonBuilder: FC<Props> = (props) => {
  switch (props.as) {
    case "a":
      return (
        <a className={props.className} onClick={props.onClick}>
          {props.children}
        </a>
      );

    case "button":
      return (
        <button className={props.className} onClick={props.onClick}>
          {props.children}
        </button>
      );
  }
};
