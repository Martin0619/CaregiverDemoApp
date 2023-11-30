import { FC, ReactNode } from "react";
import css from "./recommended-resources.module.scss";

type Props = {
  children: ReactNode;
};

const RecommendedResources: FC<Props> = ({ children }) => (
  <section className={css.recommendedResources}>
    <h2>Recommended</h2>
    {children}
  </section>
);

export default RecommendedResources;
