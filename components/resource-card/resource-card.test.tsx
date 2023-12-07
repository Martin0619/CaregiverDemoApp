import { render } from "@testing-library/react";
import ResourceCard from "./resource-card.component";

describe("ResourceCard Component", () => {
  const mockResourceItem: Resource = {
    author: "mock author",
    id: "mock id",
    image: {
      src: "https://carallel.com/wp-content/uploads/mock-src",
      height: 1,
      width: 1,
    },
    introduction: "mock introduction",
    text: "mock text",
    title: "mock text",
  };

  it("should display brief details about a resource", () => {
    // ARRANGE
    const { container } = render(
      <ResourceCard image={mockResourceItem.image} title={mockResourceItem.title} />
    );
    // ACT
    const resourceCardBodyElement = container.querySelector(`[class$="card__body"]`);
    const resourceCardTitleElement = resourceCardBodyElement?.querySelector("p");
    // ASSERT
    expect(resourceCardTitleElement).toHaveTextContent(mockResourceItem.title);
  });
});
