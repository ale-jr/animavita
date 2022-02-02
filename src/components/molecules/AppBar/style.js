import styled from "styled-components";

export const AppBarBox = styled.header`
  width: 100%;

  padding: ${({ theme }) => theme.spacing.xs};
  background-color: ${({ theme }) => theme.colors.primary.medium};
  color: ${({ theme }) => theme.colors.primary.contrast};
`;

export const AppBarTitle = styled.p`
  font-size: ${({ theme }) => theme.typography.sizes.md};
  font-weight: ${({ theme }) => theme.typography.weights.bold};
`;
