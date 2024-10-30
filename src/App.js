import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Footer from "./components/footer.component";
import NavBar from "./components/nav.component";
import Home from "./pages/home.page";
import MachineReg from "./pages/machine_register.page";
import Operate from "./pages/operate.page";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          {/* <Route path="/about" element={<About />} /> */}
          {/* <Route path="/product/:id" element={<Product />} /> */}
          <Route path="/" element={<Home />} />
          <Route
            path="/machine/register/:machineName"
            element={<MachineReg />}
          />
          <Route path="/machine/operate/:machineName" element={<Operate />} />
        </Routes>
        {/* <Footer /> */}
      </Router>
    </>
  );
}

export default App;
