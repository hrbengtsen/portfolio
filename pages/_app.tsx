import { MetaData } from "../components/MetaData";
import {
  globalStyles,
  darkTheme,
  TooltipProvider,
} from "@styple/design-system";
import { ThemeProvider } from "next-themes";
import { AppProps } from "next/app";
import { Header } from "../components/Header";
import { Wave } from "../components/Wave";
import { Footer } from "../components/Footer";
import PlausibleProvider from "next-plausible";

function App({ Component, pageProps }: AppProps) {
  globalStyles();

  return (
    <>
      <MetaData />
      <PlausibleProvider domain="mikkelbengtsen.com">
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
            <Header />
            <Wave />
            <Component {...pageProps} />
            <Footer />
          </TooltipProvider>
        </ThemeProvider>
      </PlausibleProvider>
    </>
  );
}

export default App;
