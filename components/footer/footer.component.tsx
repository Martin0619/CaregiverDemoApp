import { FC } from "react";
import { BsCheck2Circle } from "react-icons/bs";
import { CiHome } from "react-icons/ci";
import { FiBook, FiTool } from "react-icons/fi";
import NavItem from "../nav-item/nav-item.component";
import css from "./footer.module.scss";

type Props = {
  activeTab: string;
};

const Footer: FC<Props> = ({ activeTab }) => (
  <footer className={css.footer}>
    <NavItem active={activeTab === "home"} href="/">
      <CiHome />
      <span className={css.footer__text}>Home</span>
    </NavItem>

    <NavItem active={activeTab === "library"} href="/library">
      <FiBook />
      <span className={css.footer__text}>Library</span>
    </NavItem>

    <NavItem active={activeTab === "plan"} href="/plan">
      <BsCheck2Circle />
      <span className={css.footer__text}>Plan</span>
    </NavItem>

    <NavItem active={activeTab === "tools"} href="/tools">
      <FiTool />
      <span className={css.footer__text}>Tools</span>
    </NavItem>
  </footer>
);

export default Footer;
