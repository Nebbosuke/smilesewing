import "./global.css";
import Selection from "./course/Selection";
import Contact from "./component/Contact";
import Gallery from "./component/Gallery";
import Header from "./section/header/Header";
import Teacher from "./section/teacher/Teacher";
import Alterations from "./component/alterations";

function App() {
  return (
    <main className="bg-gradient-to-bl">
      <Header />
      <Teacher />
      <Selection />
      <Alterations />
      <Gallery />
      <Contact />
    </main>
  );
}

export default App;
