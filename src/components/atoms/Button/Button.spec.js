import Button from ".";
import { renderWithTheme } from "../../../../testingUtils";
import { fireEvent, screen } from "@testing-library/react";
describe("Button", () => {
    it("Matches snapshot", () => {
        const { container } = renderWithTheme(<Button>Click me!</Button>);
        expect(container).toMatchSnapshot();
    });

    it("Fires click event", () => {
        const onClick = jest.fn();
        renderWithTheme(
            <Button onClick={onClick}>Click me!</Button>
        );
        fireEvent.click(screen.getByRole('button'));

        expect(onClick).toHaveBeenCalled();
    });
});
