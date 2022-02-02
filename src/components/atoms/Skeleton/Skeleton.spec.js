import Skeleton from ".";
import { renderWithTheme } from "../../../../testingUtils";

describe("Skeleton", () => {
    it("Matches snapshot", () => {
        expect(renderWithTheme(<Skeleton />).container).toMatchSnapshot()

        expect(renderWithTheme(<Skeleton circle />).container).toMatchSnapshot()

        expect(renderWithTheme(<Skeleton width="100px" height="100px" />).container).toMatchSnapshot()
    })

    it("Renders repeated skeletons", () => {
        const { container } = renderWithTheme(<Skeleton repeat={10} />)
        expect(container).toMatchSnapshot()
    })
})