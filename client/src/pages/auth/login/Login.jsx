import { useEffect, useState } from "react";
import ButtonDefault from "../../../components/button/Button";
import { InputDefault } from "../../../components/input/Input";
import styles from "../auth.module.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser } from "../../../features/auth/authSlice";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Alert from "@mui/material/Alert";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { loading, error, isLogged } = useSelector((state) => state.auth);

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      email,
      password,
    };

    console.log(data);
    dispatch(loginUser(data));
  };

  useEffect(() => {
    if (isLogged) {
      navigate("/");
    }
  }, [isLogged]);

  return (
    <div className={styles.container}>
      <h1>Entre!</h1>
      <p>Toda jornada começa com um login.</p>
      {Array.isArray(error) &&
        error.map((e, index) => (
          <Alert key={index} severity="error">
            {e}
          </Alert>
        ))}
      <form onSubmit={handleSubmit}>
        <div className={styles.localInput}>
          <InputDefault
            fullWidth={true}
            label={"E-mail"}
            type={"email"}
            required={true}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className={styles.localInput}>
          <InputDefault
            fullWidth={true}
            label={"Senha"}
            type={"password"}
            required={true}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <ButtonDefault
          text={"Fazer login"}
          variant={"outlined"}
          type={"submit"}
          loading={loading ? true : false}
        />
        <span>
          Novo por aqui? <Link to={"/register"}>cadastrar</Link>
        </span>
      </form>
    </div>
  );
};
