import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getUser } from "./features/auth/authSlice";

//Componentes
import { Register } from "./pages/auth/register/Register";
import { Login } from "./pages/auth/login/Login";
import { Home } from "./pages/home/Home";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();

  //Pegando usuário logado ao reatualizar componente
  useEffect(() => {
    dispatch(getUser());
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
