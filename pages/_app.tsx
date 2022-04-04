import { MetaData } from "../components/MetaData";
import {
  globalStyles,
  darkTheme,
  TooltipProvider,
} from "@styple/design-system";
import { ThemeProvider } from "next-themes";
import { AppProps } from "next/app";

function App({ Component, pageProps }: AppProps) {
  globalStyles();

  return (
    <>
      <MetaData />
      <ThemeProvider
        disableTransitionOnChange
        attribute="class"
        value={{
          light: "light-theme",
          dark: darkTheme.className,
        }}
        enableSystem
        enableColorScheme
        defaultTheme="system"
      >
        <TooltipProvider>
          <Component {...pageProps} />
        </TooltipProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
