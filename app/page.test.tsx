import { render, screen } from "@testing-library/react";
import Home from "~/app/page";

describe("Home Page", () => {
  it("should have Home text", async () => {
    // ARRANGE
    const JsxComponent = await Home();
    render(JsxComponent);
    // ACT
    const element = await screen.getByText("Home");
    // ASSERT
    expect(element).toBeInTheDocument();
  });
});
