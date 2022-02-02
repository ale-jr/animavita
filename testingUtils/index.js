import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { theme } from "../src/themes/default";

function ThemeProviderWrapper({ children }) {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );
}

export const renderWithTheme = (ui, options) =>
  render(ui, {
    wrapper: ThemeProviderWrapper,
    ...options
  });
