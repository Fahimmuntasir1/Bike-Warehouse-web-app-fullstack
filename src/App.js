import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Sheared/Header/Header";
import Banner from "./components/Pages/Banner/Banner";
import Home from "./components/Pages/Home/Home";
import Footer from "./components/Sheared/Footer/Footer";
import About from "./components/Pages/About/About";

function App() {
  return (
    <div className="">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/banner" element={<Banner />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
