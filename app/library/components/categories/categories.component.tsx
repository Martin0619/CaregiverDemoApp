import { FC } from "react";
import ResourceCard from "~/components/resource-card/resource-card.component";
import css from "./categories.module.scss";

type Props = {
  categories: Category[];
};

const Categories: FC<Props> = ({ categories }) => (
  <section className={css.categories}>
    {categories.map((c) => (
      <ResourceCard key={c.title} {...c} variant="rounded" />
    ))}
  </section>
);

export default Categories;
