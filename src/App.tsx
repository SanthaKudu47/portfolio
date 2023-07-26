import { About } from "components/about/About";
import { Navigation } from "components/common/navigation/Navigation";
import { Experience } from "components/experience/Experience";
import { Header } from "components/header/Header";
import { Service } from "components/service/Service";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <About />
      <Experience />
      <Service />
    </div>
  );
}

export default App;
