import { FC } from "react";
import { BsBell } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";
import css from "./header.module.scss";

type Props = {
  activeTab: string;
};

const Header: FC<Props> = (props) => (
  <header className={css.header}>
    <IoSettingsOutline />
    <h5 className={css.header__title}>
      {props.activeTab === "home" ? "caregiver" : props.activeTab.replace("/", "")}
    </h5>
    <BsBell />
  </header>
);

export default Header;
