import Avatar from "../../atoms/Avatar";
import { NamesAndAvatarBox, StyledCard } from "./style";
import propTypes from "prop-types";
import Skeleton from "../../atoms/Skeleton";

function CharacterCard({
    character: { avatar, name, otherNames, about },
    loading
}) {
    return (
        <StyledCard as="li">
            <NamesAndAvatarBox>
                {loading ? <Skeleton circle height="100px" width="100px" /> : <Avatar src={avatar} alt="" />}
                <div>
                    <h3>
                        {loading ? <Skeleton width="200px" /> : name}
                    </h3>
                    {loading && <p><Skeleton width="150px" /></p>}
                    {otherNames?.length > 0 && <p data-testid="other-names">
                        <strong>Outros nomes:</strong> {otherNames.join(", ")}
                    </p>}
                </div>
            </NamesAndAvatarBox>
            <h4>{loading ? <Skeleton width="100px" /> : 'Sobre'}</h4>
            <p data-testid="about">
                {loading && <Skeleton repeat={3} />}
                {about}
            </p>
        </StyledCard>
    );
}

CharacterCard.defaultProps = {
    character: {
        about: "",
        avatar: "",
        name: "",
        otherNames: []
    },
    loading: false
};

CharacterCard.propTypes = {
    character: propTypes.shape({
        avatar: propTypes.string.isRequired,
        name: propTypes.string.isRequired,
        otherNames: propTypes.arrayOf(propTypes.string).isRequired,
        about: propTypes.string.isRequired
    }),
    loading: propTypes.bool
};

export default CharacterCard;
