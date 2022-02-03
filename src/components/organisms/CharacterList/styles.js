import styled from "styled-components";

export const CharacterListBox = styled.ul`
  list-style-type: none;
  padding: ${({ theme }) => theme.spacing.sm};
  width: 80%;
  li {
    margin-bottom: ${({ theme }) => theme.spacing.sm};
  }
`;

export const CharacterListError = styled.p`
  color: red;
  text-align: center;
`;
