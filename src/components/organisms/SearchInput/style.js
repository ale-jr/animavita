import styled from "styled-components";

export const SearchInputForm = styled.form`
  display: flex;
  align-items: stretch;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.xs};
`;
