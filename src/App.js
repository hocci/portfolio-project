import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from "react-particles-js";
import Narbar from "./components/Navbar";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Particles
        className="particles-canvas" 
        params={{
          particles: {
            number: {
              value: 30,
              density: {
                enable: true,
                value_area:900, 
              }
            },
            shape: {
              type: "circle",
              stroke: {
                width: 6,
                color: "random",
              }
            },
            links: {              
              color: "random",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,            
            },
          }
        }}
      />
      <Narbar />
      <Header />
    </>    
  );
}

export default App;
