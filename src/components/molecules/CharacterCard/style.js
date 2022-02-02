import styled from "styled-components";
import Card from "../../atoms/Card";
export const NamesAndAvatarBox = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.xs};

  h3{
      margin-bottom: ${({ theme }) => theme.spacing.xxs};
  }
`;

export const StyledCard = styled(Card)`
display: flex;
flex-direction: column;
gap: ${({ theme }) => theme.spacing.xs};
`;
