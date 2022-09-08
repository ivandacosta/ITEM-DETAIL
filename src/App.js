import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//views
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import ItemDetail from "./components/ItemDetail/ItemDetail";
import ItemDetails from "./pages/ItemsDetails/ItemsDetails";

//components
import Header from "./components/Header/Header";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/detail/:id" element={<ItemDetails />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
