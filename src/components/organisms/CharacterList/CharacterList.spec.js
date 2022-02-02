import CharacterList from ".";
import { renderWithTheme } from "../../../../testingUtils";
import { getByRole, screen } from '@testing-library/react'

describe("CharacterList", () => {
    const characters = [{
        id: '1',
        about:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eu maximus sapien. Nullam vestibulum rhoncus tempus. Morbi ultrices risus sit amet fermentum lacinia. Duis imperdiet diam vel eros imperdiet, eu aliquet velit rutrum. ",
        avatar: "https://i.pravatar.cc/100",
        name: "Dummy character",
        otherNames: ["Dummy 1", "Dummy 2", "Dummy 3"]
    }, {
        id: '2',
        about:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eu maximus sapien. Nullam vestibulum rhoncus tempus. Morbi ultrices risus sit amet fermentum lacinia. Duis imperdiet diam vel eros imperdiet, eu aliquet velit rutrum. ",
        avatar: "https://i.pravatar.cc/100",
        name: "Dummy character",
        otherNames: ["Dummy 1", "Dummy 2", "Dummy 3"]
    }
    ]
    
    it("Render characters", async () => {
        renderWithTheme(<CharacterList characters={characters} />)
        const items = await screen.findAllByRole('listitem')

        items.forEach((item, index) => {
            const character = characters[index]
            expect(item).toHaveTextContent(character.about, {})
            expect(item).toHaveTextContent(character.name, {})
            expect(item).toHaveTextContent(character.otherNames.join(', '), {})
            // eslint-disable-next-line testing-library/prefer-screen-queries
            expect(getByRole(item, 'img')).toHaveAttribute('src', character.avatar)
        })
    })
})