import Link from "next/link";
import { FC } from "react";
import ResourceCard from "~/components/resource-card/resource-card.component";
import css from "./additional-resources.module.scss";

type Props = {
  resources: Resource[];
};

const AdditionalResources: FC<Props> = ({ resources }) => {
  return (
    <section className={css.additionalResources}>
      <h2>Additional Resources</h2>
      <div className={css.additionalResources__list}>
        {resources.map((r) => (
          <Link href={`/library/${r.id}`} key={r.title}>
            <ResourceCard {...r} variant="rounded" layout="row" />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default AdditionalResources;
