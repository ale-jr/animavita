import SearchInput from ".";
import { renderWithTheme } from "../../../../testingUtils";
import { fireEvent, screen } from "@testing-library/react";

describe("SearchInput", () => {
  it("fires onSubmitEvent", () => {
    const value = "helloooo";
    const onSubmit = jest.fn();
    renderWithTheme(<SearchInput onSearch={onSubmit} />);

    fireEvent.change(screen.getByRole("textbox"), {
      target: {
        value
      }
    });

    fireEvent.click(screen.getByRole("button"));

    expect(onSubmit).toBeCalledWith(value);
  });
});
