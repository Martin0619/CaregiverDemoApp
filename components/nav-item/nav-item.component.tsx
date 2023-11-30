import clsx from "clsx";
import Link from "next/link";
import { FC, ReactNode } from "react";
import css from "./nav-item.module.scss";

type Props = {
  children: ReactNode;
  active: boolean;
  href: string;
};

const NavItem: FC<Props> = (props) => (
  <Link href={props.href} className={clsx(css.navItem, { [css.active]: props.active })}>
    {props.children}
  </Link>
);

export default NavItem;
