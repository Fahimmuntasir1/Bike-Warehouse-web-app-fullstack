import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Sheared/Header/Header";
import Banner from "./components/Pages/Banner/Banner";
import Home from "./components/Pages/Home/Home";
import Footer from "./components/Sheared/Footer/Footer";
import About from "./components/Pages/About/About";
import Register from "./components/Login-Register/Register/Register";
import Login from "./components/Login-Register/Login/Login";
import NotFound from './components/Pages/NotFound/NotFound'
import Blog from "./components/Pages/Blogs/Blog";
import UpdateInvntory from "./components/Pages/InventoryUpdate/UpdateInvntory";
import RequireAuth from "./components/Auth/RequireAuth/RequireAuth";

function App() {
  return (
    <div className="">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/banner" element={<Banner />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/blogs" element={<Blog/>}></Route>
        <Route path="/invupdate/:_id" element={
          <RequireAuth>
            <UpdateInvntory/>
          </RequireAuth>
        }></Route>
        <Route path="/*" element={<NotFound/>}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
