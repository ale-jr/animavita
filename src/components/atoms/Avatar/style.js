import styled from "styled-components";

export const Avatar = styled.img`
  border-radius: 50%;
  width: 100px;
  height: 100px;
  object-fit: cover;
  border: 1px solid ${({ theme }) => theme.colors.neutral.medium};
`;
