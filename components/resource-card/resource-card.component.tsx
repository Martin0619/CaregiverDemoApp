import clsx from "clsx";
import Image from "next/image";
import { FC } from "react";
import css from "./resource-card.module.scss";

type Props = {
  image: {
    src: string;
    width: number;
    height: number;
  };
  title: string;
  variant?: "rounded";
  layout?: "row";
};

const ResourceCard: FC<Props> = (props) => (
  <div
    className={clsx(css.card, {
      [css.rounded]: props.variant === "rounded",
      [css.row]: props.layout === "row",
    })}
  >
    <div className={css.card__header}>
      <Image src={props.image.src} alt="" fill />
    </div>
    <div className={css.card__body}>
      <p>{props.title}</p>
    </div>
  </div>
);

export default ResourceCard;
