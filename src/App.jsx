import { BrowserRouter } from "react-router-dom";
import {About , Contact , Experience , Experiencex , Hero , Navbar, Tech , Works , StarsCanvas} from './components';

function App() {

  return(
    <BrowserRouter>
    <div className="relative z-0 bg-primary">
    <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">

      <Navbar/>
      <Hero/>

    </div>

    <About/>
    <Experience/>
    <Tech/>
    <Works/>
    

    <div className="relative z-0">
    <Experiencex/>
      <Contact/>
      <StarsCanvas/>
      
    </div>


    </div>
    </BrowserRouter>
  ); 
  
}

export default App;
