import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import NavBar from "./components/navbar";
import theme from "./theme";

export default function Root(props) {
  /*
 // TODO - This needs to be handled a bit differently I guess
 // adding this causes the client side to break
React.useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []); 
*/
  return (
    <ThemeProvider theme={theme}>
      <NavBar title={props.name} />
    </ThemeProvider>
  );
}
