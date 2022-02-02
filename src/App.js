import { ThemeProvider } from "styled-components";
import { theme } from "./themes/default";
function App() {
  return <ThemeProvider theme={theme}>hello world</ThemeProvider>;
}

export default App;
