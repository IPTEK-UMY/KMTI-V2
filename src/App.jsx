import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Home from './Pages/Home';
import Navbar from './Navbar';
import './index.css';


function App() {
  return (
    <>
    <Navbar/>
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
