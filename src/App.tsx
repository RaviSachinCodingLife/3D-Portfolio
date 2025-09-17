import About from "./components/About";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import { Hero } from "./components/Hero";
import Projects from "./components/Projects";
import { NavBar } from "./components/NavBar";
import Skills from "./components/Skills";
import { Footer } from "./components/Footer";
import { Box } from "@mui/material";

function App() {
  return (
    <Box className="App">
      <NavBar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Education />
      <Projects />
      <Contact />
      <Footer />
    </Box>
  );
}

export default App;
