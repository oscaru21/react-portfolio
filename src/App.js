import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { GithubProvider } from "./context/github/GithubContext";
import "./index.css";
import Github from "./pages/Github";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import Contact from "./pages/Contact";

let theme = createTheme({
  typography: {
    fontFamily: ["Share Tech Mono", "monospace"].join(","),
  },
  palette: {
    primary: {
      light:"#610094",
      main:"#3F0071",
      dark:"#291561",
    },
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GithubProvider>
        <Navbar />
        <Home />
        <Github />
        <Contact />
      </GithubProvider>
    </ThemeProvider>
  );
}

export default App;
