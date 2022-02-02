import TextInput from ".";
import { renderWithTheme } from "../../../../testingUtils";
import { fireEvent, screen } from "@testing-library/react";

describe("TextInput", () => {
  it("Matches snapshot", () => {
    const { container } = renderWithTheme(
      <TextInput label="Hello" value="xpto" id="input" onChange={() => {}} />
    );
    expect(container).toMatchSnapshot();
  });

  it("Renders label and placeholder correctly", () => {
    const label = "Search";
    const placeholder = "Placeholder";
    renderWithTheme(
      <TextInput label={label} onChange={() => {}} placeholder={placeholder} />
    );

    expect(screen.getByLabelText(label)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(placeholder)).toBeInTheDocument();
  });

  it("Fires onChange event", () => {
    const label = "Search";
    const placeholder = "Placeholder";
    const value = "123";

    const onChange = jest.fn();
    renderWithTheme(
      <TextInput
        label={label}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
      />
    );

    fireEvent.change(screen.getByPlaceholderText(placeholder), {
      target: {
        value
      }
    });

    expect(onChange).toBeCalledWith(value);
  });
});
