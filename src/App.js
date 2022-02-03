import { ThemeProvider } from "styled-components";
import SearchCharactersContainer from "./containers/SearchCharactersContainer";
import { GlobalStyle } from "./globalStyles";
import { theme } from "./themes/default";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <SearchCharactersContainer />
    </ThemeProvider>
  );
}

export default App;
