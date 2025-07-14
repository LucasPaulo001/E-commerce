import ButtonDefault from "../../../components/button/Button";
import { InputDefault } from "../../../components/input/Input";
import styles from "../auth.module.css";
import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <div className={styles.container}>
        <h1>Entre!</h1>
        <p>Toda jornada começa com um login.</p>
      <form>
        <div className={styles.localInput}>
          <InputDefault
            fullWidth={true}
            label={"E-mail"}
            type={"email"}
            required={true}
          />
        </div>

        <div className={styles.localInput}>
          <InputDefault
            fullWidth={true}
            label={"Senha"}
            type={"password"}
            required={true}
          />
        </div>
        <ButtonDefault 
            text={"Fazer login"}
            variant={"outlined"}
        />
        <span>Novo por aqui? <Link to={"/register"}>cadastrar</Link></span>
      </form>
    </div>
  );
};
