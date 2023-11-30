import { FC } from "react";
import ResourceCard from "../resource-card/resource-card.component";
import css from "./list-resources.module.scss";

type Props = {
  resources: Resource[];
};

const ListResources: FC<Props> = ({ resources }) => (
  <div className={css.listResources}>
    {resources.map((r) => (
      <ResourceCard {...r} key={r.title} />
    ))}
  </div>
);

export default ListResources;
