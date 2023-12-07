import { render } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import Button from "./button.component";

describe("Button Component", () => {
  const mockButtonAction = jest.fn();

  describe("variants", () => {
    it("should render an anchor tag", () => {
      // ARRANGE
      const { container } = render(<Button as="a" />);
      // ACT
      const anchorTagElement = container.querySelector("a[class*=button]");
      // ASSERT
      expect(anchorTagElement).toBeInTheDocument();
    });
  });

  describe("behavior", () => {
    it("should trigger a controlled action", async () => {
      // ARRANGE
      const { container } = render(<Button as="a" onClick={mockButtonAction} />);
      const anchorTagElement = container.querySelector("a[class*=button]");
      // ACT
      if (anchorTagElement === null)
        throw new Error(`querySelector("a[class*=button]") didn't match an HTML element`);
      await userEvent.click(anchorTagElement);
      // ASSERT
      expect(mockButtonAction).toHaveBeenCalledTimes(1);
    });
  });
});
