import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getUser } from "./features/auth/authSlice";

//Componentes
import { Register } from "./pages/auth/register/Register";
import { Login } from "./pages/auth/login/Login";
import { Home } from "./pages/home/Home";
import { useEffect } from "react";
import { Profile } from "./pages/profile/Profile";
import { Navbar } from "./components/navbar/Navbar";
import { Footer } from "./components/footer/Footer";
import { useLocation } from "react-router-dom";

function App() {
  const dispatch = useDispatch();
  const location = useLocation();

  const hideNavbarRoutes = ["/login", "/register"];
  const shouldHideNavbar = hideNavbarRoutes.includes(location.pathname);

  //Pegando usuário logado ao reatualizar componente
  useEffect(() => {
    dispatch(getUser());
  }, []);

  return (
    <>
      {!shouldHideNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/account/profile" element={<Profile />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
