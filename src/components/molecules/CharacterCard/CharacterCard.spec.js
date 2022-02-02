import { renderWithTheme } from "../../../../testingUtils/index";
import { screen } from "@testing-library/react";
import CharacterCard from ".";

describe("CharacterCard", () => {
    it("Render correct with correct info", () => {
        const character = {
            about:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eu maximus sapien. Nullam vestibulum rhoncus tempus. Morbi ultrices risus sit amet fermentum lacinia. Duis imperdiet diam vel eros imperdiet, eu aliquet velit rutrum. ",
            avatar: "https://i.pravatar.cc/100",
            name: "Dummy character",
            otherNames: ["Dummy 1", "Dummy 2", "Dummy 3"]
        };
        renderWithTheme(<CharacterCard character={character} />);

        expect(screen.queryByRole("img")).toHaveAttribute("src", character.avatar);

        expect(
            screen.queryByRole("heading", {
                level: 3
            })
        ).toHaveTextContent(character.name);

        expect(screen.queryByTestId("other-names")).toHaveTextContent(
            character.otherNames.join(", ")
        );

        expect(screen.queryByTestId("about")).toHaveTextContent(character.about, {
            normalizeWhitespace: false
        });
    });

    it("Renders when otherNames are not provided", () => {
        const character = {
            about:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eu maximus sapien. Nullam vestibulum rhoncus tempus. Morbi ultrices risus sit amet fermentum lacinia. Duis imperdiet diam vel eros imperdiet, eu aliquet velit rutrum. ",
            avatar: "https://i.pravatar.cc/100",
            name: "Dummy character",
            otherNames: []
        };
        renderWithTheme(<CharacterCard character={character} />);
        expect(screen.queryByTestId("other-names")).not.toBeInTheDocument();
    });
});
