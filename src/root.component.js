import React from "react";
import { BrowserRouter, Redirect, Route, StaticRouter } from "react-router-dom";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import NavBar from "./components/navbar";
// import theme from "./theme";

const isBrowser = () => typeof window !== "undefined";

export default function Root(props) {
  const inputRef = React.useRef(null);
  const [darkMode, setDarkMode] = React.useState(true);
  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: darkMode ? "dark" : "light"
        }
      }),
    [darkMode]
  );

  // TODO - This needs to be handled a bit differently I guess
  // adding this causes the client side to break
  React.useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  const handleDarkMode = () => {
    const event = new CustomEvent("mode-event", {
      detail: !darkMode,
      bubbles: true,
      cancelable: false,
      composed: true // makes the event jump shadow DOM boundary); */
    });
    inputRef.current.dispatchEvent(event);
    setDarkMode(!darkMode);
  };

  const RootChildren = () => (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div ref={inputRef}>
          <NavBar title={"Pokedex SSR"} themeChange={() => handleDarkMode()} />
        </div>
      </ThemeProvider>
      <Route exact path="/">
        <Redirect to="/pokemons" />
      </Route>
    </>
  );

  if (isBrowser()) {
    return (
      <BrowserRouter basename="/">
        <RootChildren />
      </BrowserRouter>
    );
  }
  return (
    <StaticRouter basename="/">
      <RootChildren />
    </StaticRouter>
  );
}
