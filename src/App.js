import { ThemeProvider } from "styled-components";
import SearchCharactersPage from "./components/pages/SearchCharacters";
import { GlobalStyle } from "./globalStyles";
import { theme } from "./themes/default";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <SearchCharactersPage />
    </ThemeProvider>
  );
}

export default App;
