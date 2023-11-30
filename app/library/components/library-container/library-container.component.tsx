import { FC, ReactNode } from "react";
import css from "./library-container.module.scss";

type Props = {
  children: ReactNode;
};

const LibraryContainer: FC<Props> = ({ children }) => (
  <div className={css.libraryContainer}>{children}</div>
);

export default LibraryContainer;
