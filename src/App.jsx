import { Route, Routes } from "react-router-dom"
import Home from './Pages/Home';
import Ph from './Pages/Ph'
import Navbar from './components/Navbar';
import './index.css';
import Top from './components/Top';


function App() {
  return (
    <>
    <Navbar/>
    <Top/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Ph" element={<Ph />}/>
      </Routes>
    </>
  );
}

export default App;
