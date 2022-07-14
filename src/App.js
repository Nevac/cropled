import logo from './logo.svg';
import './App.css';
import {Container} from "@mui/material";
import PlantCarousel from "./components/plant-carousel/PlantCarousel";

function App() {
  return (
    <div className="App">
      <Container fixed style={{marginTop: 100}}>
          <PlantCarousel/>
      </Container>
    </div>
  );
}

export default App;
