import { Header } from "./components/Header";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Education } from "./components/Education";
import { Technologies } from "./components/Technologies";
import { Languages } from "./components/Languages";
import { StarStories } from "./components/StarStories";
import { StarPrint } from "./components/StarPrint";
import { Footer } from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main">
        <About />
        <Experience />
        <StarStories />
        <StarPrint />
        <Education />
        <Technologies />
        <Languages />
      </main>
      <Footer />
    </div>
  );
}

export default App;
