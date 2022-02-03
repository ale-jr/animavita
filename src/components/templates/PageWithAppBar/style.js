import styled from "styled-components";
export const PageBox = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  main {
    flex-grow: 1;
    overflow: auto;
    padding: ${({theme})=>theme.spacing.md};
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
