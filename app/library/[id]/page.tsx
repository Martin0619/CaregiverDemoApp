import clsx from "clsx";
import { NextPage } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { FaRegBookmark } from "react-icons/fa";
import { GoThumbsdown, GoThumbsup } from "react-icons/go";
import fetchRecommendedResources from "~/api/library/fetch-recommended.api";
import fetchResourceById from "~/api/library/fetch-resource-by-id.api";
import Button from "~/components/button/button.component";
import FlexContainer from "~/components/flex-container/flex-container.component";
import ResourceCard from "~/components/resource-card/resource-card.component";
import css from "./page.module.scss";

type Props = {
  params: {
    id: string;
  };
};

const ResourceDetail: NextPage<Props> = async ({ params: { id } }) => {
  const resource = await fetchResourceById(id);
  // here I'm just fetching resources, but this should be resources related to the one we got through the params
  const relatedResources = await fetchRecommendedResources();

  if (!resource) return notFound();

  return (
    <div className={css.article}>
      <section className={css.article__header}>
        <div className={css.article__imageContainer}>
          <Image
            src={resource.image}
            alt=""
            layout="fill"
            objectFit="cover"
            objectPosition="top"
            className={css.article__headerImage}
          />
        </div>
        <Button>
          <FlexContainer className={css.bookmark}>
            <FaRegBookmark />
            <span>Bookmark</span>
          </FlexContainer>
        </Button>
      </section>

      <FlexContainer column as="section" className={clsx(css.flexContainer, css.section)}>
        <h1>{resource.title}</h1>
        <p>{resource.introduction}</p>
      </FlexContainer>

      <FlexContainer as="section" column className={clsx(css.media, css.flexContainer)}>
        <iframe
          className={css.article__video}
          src="https://player.vimeo.com/video/879408384?h=19802a0692&title=0&byline=0&portrait=0"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        ></iframe>
        <h2>You are a caregiver</h2>
        <p>{resource.text}</p>
        <Button thin>New to Caregiver</Button>
        <Button thin>What to Expect</Button>
        <FlexContainer>
          <Button>
            <GoThumbsup />
          </Button>
          <Button>
            <GoThumbsdown />
          </Button>
        </FlexContainer>
      </FlexContainer>

      <FlexContainer as="section" column className={clsx(css.flexContainer, css.section)}>
        <h2>Related Resources</h2>
        <FlexContainer>
          {relatedResources.map((r) => (
            <ResourceCard key={r.id} {...r} />
          ))}
        </FlexContainer>
      </FlexContainer>
    </div>
  );
};

export default ResourceDetail;
