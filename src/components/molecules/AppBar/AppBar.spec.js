import { renderWithTheme } from "../../../../testingUtils";
import AppBar from ".";

describe("AppBar", () => {
  it("renders correclty", () => {
    const { container } = renderWithTheme(<AppBar title="AppBarTitle" />);
    expect(container).toMatchSnapshot();
  });
});
