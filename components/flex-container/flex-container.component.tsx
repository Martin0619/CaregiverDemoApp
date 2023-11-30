import clsx from "clsx";
import { FC, ReactNode } from "react";
import css from "./flex-container.module.scss";

type Props = {
  children?: ReactNode;
  as?: "div" | "section" | "span";
  column?: boolean;
  className?: string;
};

const FlexContainer: FC<Props> = (props) => (
  <ContainerBuilder
    as={props.as}
    className={clsx(
      css.flexContainer,
      {
        [css.column]: props.column === true,
      },
      props.className
    )}
  >
    {props.children}
  </ContainerBuilder>
);

export default FlexContainer;

type ContainerBuilderProps = Pick<Props, "as" | "children"> & {
  className?: string;
};

const ContainerBuilder: FC<ContainerBuilderProps> = ({ children, as, className }) => {
  switch (as) {
    case "div":
      return <div className={className}>{children}</div>;

    case "section":
      return <section className={className}>{children}</section>;

    case "span":
      return <span className={className}>{children}</span>;

    default:
      return <div className={className}>{children}</div>;
  }
};
