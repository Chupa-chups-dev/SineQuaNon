import { Routes, Route } from "react-router-dom";
import './scss/App.scss'
import SideBar from "./components/NavSideBar/SideBar";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Investment from "./pages/Investment/Investment";

function App() {
  return (
    <>
      <SideBar/>
      {/* <Home/>
      <Footer/> */}
      <Investment/>
      </>
    
  );
}

export default App;
