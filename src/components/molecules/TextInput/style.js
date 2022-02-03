import styled from "styled-components";

export const TextInputBox = styled.div`
  display: inline-flex;
  flex-direction: column;
  border-radius: 500px;
  border: 1px solid ${({ theme }) => theme.colors.primary.light};
  transition: ${({ theme }) => theme.animations.easeInOut};
  background-color: ${({ theme }) => theme.colors.neutral.white};

  padding: ${({ theme }) => `${theme.spacing.xxs} ${theme.spacing.xs}`};
  &:focus-within {
    border-color: ${({ theme }) => theme.colors.primary.dark};
  }
`;

export const TextInput = styled.input`
  &:focus {
    outline: 0;
  }

  background-color: transparent;
  border: none;
  padding: 0;
  font-size: ${({ theme }) => theme.typography.sizes.xs};
`;

export const TextInputLabel = styled.label`
  font-size: ${({ theme }) => theme.typography.sizes.xxs};
  color: ${({ theme }) => theme.colors.text.medium};
`;
