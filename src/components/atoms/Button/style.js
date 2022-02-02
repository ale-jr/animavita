import styled from "styled-components";

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.primary.medium};
  color: ${({ theme }) => theme.colors.primary.contrast};
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  border-radius: 500px;
  padding: ${({ theme }) => `${theme.spacing.xxs} ${theme.spacing.xs}`};
  text-transform: uppercase;
  border: none;
  cursor: pointer;

  transition: ${({ theme }) => theme.animations.easeInOut};

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary.dark};
  }

  &:focus-visible {
    background-color: ${({ theme }) => theme.colors.primary.medium};
    outline-color: ${({ theme }) => theme.colors.primary.dark};
  }
`;
