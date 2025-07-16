import styles from "../auth.module.css";
import { InputDefault } from "../../../components/input/Input";
import ButtonDefault from "../../../components/button/Button";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../../features/auth/authSlice";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Alert from "@mui/material/Alert";

export const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setComfirmPass] = useState("");
  const [phone, setPhone] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  //Importando ferramentas do authReducer
  const { loading, error } = useSelector((state) => state.auth);

  //Função de registro
  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      name,
      email,
      password,
      confirmPass,
      phone,
    };

    try{
      await dispatch(registerUser(data)).unwrap()
      navigate("/login")
    }
    catch(err){
      console.log(err)
    }

    dispatch(registerUser(data));
    console.log(error);
  };


  return (
    <div className={styles.container}>
      <h1>Cadastrar!</h1>
      <p>Os melhores produtos, na palma da sua mão.</p>
      <form onSubmit={handleSubmit}>
        {Array.isArray(error) &&
        error.map((e, index) => (
          <Alert key={index} severity="error">{e}</Alert>
        ))}
        <div className={styles.localInput}>
          <InputDefault
            label={"Nome"}
            type={"text"}
            required={true}
            fullWidth={true}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className={styles.localInput}>
          <InputDefault
            label={"E-mail"}
            type={"E-mail"}
            required={true}
            fullWidth={true}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={styles.localInput}>
          <InputDefault
            label={"Senha"}
            type={"password"}
            required={true}
            fullWidth={true}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className={styles.localInput}>
          <InputDefault
            label={"Confirmar senha"}
            type={"password"}
            required={true}
            fullWidth={true}
            value={confirmPass}
            onChange={(e) => setComfirmPass(e.target.value)}
          />
        </div>

        <div className={styles.localInput}>
          <InputDefault
            label={"Telefone"}
            type={"tel"}
            required={true}
            fullWidth={true}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        <ButtonDefault
          text={"Cadastro"}
          variant={"outlined"}
          type={"submit"}
          loading={loading ? true : false}
        />

        <span>
          Tem uma conta? <Link to={"/login"}>Entre</Link>
        </span>
      </form>
    </div>
  );
};
