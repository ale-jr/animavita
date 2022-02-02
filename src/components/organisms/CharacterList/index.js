import propTypes from 'prop-types'
import { CharacterListBox, CharacterListError } from './styles'
import CharacterCard from '../../molecules/CharacterCard'

function CharacterList({ characters, loading, error }) {

    return <CharacterListBox>
        {characters.map((character) => <CharacterCard character={character} key={character.id} />)}
        {loading && Array.from(Array(4)).map((_, key) => <CharacterCard key={key} />)}
        {error && <CharacterListError>{error}</CharacterListError>}
    </CharacterListBox>
}

CharacterList.propTypes = {
    characters: propTypes.array.isRequired,
    loading: propTypes.bool,
    error: propTypes.string
}

export default CharacterList