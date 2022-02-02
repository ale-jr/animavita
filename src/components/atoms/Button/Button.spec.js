import Button from ".";
import { renderWithTheme } from "../../../../testingUtils";
import { fireEvent } from "@testing-library/react";
describe("Button", () => {
  it("Matches snapshot", () => {
    const { container } = renderWithTheme(<Button>Click me!</Button>);
    expect(container).toMatchSnapshot();
  });

  it("Fires click event", () => {
    const onClick = jest.fn();
    const { container } = renderWithTheme(
      <Button onClick={onClick}>Click me!</Button>
    );
    fireEvent.click(container.firstChild);

    expect(onClick).toHaveBeenCalled();
  });
});
