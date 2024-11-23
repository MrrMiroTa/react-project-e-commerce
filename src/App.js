import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import Product from "./components/Product";

function App() {
  return (
    <Router> 
      <Header />
      <Sidebar />
      <Home/>
      <Routes>
        <Route path="/home" element={<Home />} />
        {/* You can add more routes for other components if needed */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
