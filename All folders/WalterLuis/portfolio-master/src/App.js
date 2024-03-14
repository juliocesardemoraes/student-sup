  import './App.css';
import Navbar from './Componentes/sections/Navbar'
import Presentation from './Componentes/sections/Presentation';
import Skills from './Componentes/sections/Skills';
import Project from './Componentes/sections/Project';
import Footer from './Componentes/sections/Footer';



function App() {
  return (
    <div className="App">
     <Navbar/>
     <Presentation/>
     <Skills/>
     <Project/>
     <Footer/>
    
    </div>
  );
}

export default App;
