import { NextPage } from "next";
import fetchRecommendedResources from "~/api/library/fetch-recommended.api";
import ListResources from "~/components/list-resources/list-resources.component";
import AdditionalResources from "./components/additional-resources/additional-resources.component";
import Categories from "./components/categories/categories.component";
import LibraryContainer from "./components/library-container/library-container.component";
import RecommendedResources from "./components/recommended-resources/recommended-resources.component";

const LibraryPage: NextPage = async () => {
  const recommendedResources = (await fetchRecommendedResources()) as any[];

  return (
    <LibraryContainer>
      <RecommendedResources>
        <ListResources resources={recommendedResources} />
      </RecommendedResources>

      <Categories categories={recommendedResources} />

      <AdditionalResources resources={recommendedResources} />
    </LibraryContainer>
  );
};

export default LibraryPage;
