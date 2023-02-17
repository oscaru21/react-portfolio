import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { GithubProvider } from "./context/github/GithubContext";
import "./index.css";
import Github from "./pages/Github";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import Contact from "./pages/Contact";
import About from "./pages/About";

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
        <About/>
        <Contact />
      </GithubProvider>
    </ThemeProvider>
  );
}

export default App;
