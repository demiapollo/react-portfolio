import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
 
import './App.css';
import Sidenav from './Components/Sidenav';
import Explore from "./Pages/Explore";
import Home from "./Pages/Home";
import Settings from "./Pages/Settings";
import Statistics from "./Pages/Statistics";
import { 
  Typography 
} from "@material-ui/core";


function App() {
  return (
    <div className="App">
      <Typography>Hello World!!</Typography>
    </div>
  );
}

export default App;