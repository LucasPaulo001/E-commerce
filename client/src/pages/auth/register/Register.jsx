import styles from "../auth.module.css";
import { InputDefault } from "../../../components/input/Input";
import ButtonDefault from "../../../components/button/Button";
import { Link } from "react-router-dom";

export const Register = () => {
  return (
    <div className={styles.container}>
        <h1>Cadastrar!</h1>
        <p>Criar uma conta é só o começo de algo delicioso.</p>
      <form>
        <div className={styles.localInput}>
          <InputDefault label={"Nome"} type={"text"} required={true} fullWidth={true} />
        </div>
        <div className={styles.localInput}>
          <InputDefault label={"E-mail"} type={"E-mail"} required={true} fullWidth={true} />
        </div>
        <div className={styles.localInput}>
          <InputDefault label={"Senha"} type={"password"} required={true} fullWidth={true} />
        </div>

        <div className={styles.localInput}>
          <InputDefault label={"Confirmar senha"} type={"password"} required={true} fullWidth={true} />
        </div>

        <div className={styles.localInput}>
          <InputDefault label={"Telefone"} type={"tel"} required={true} fullWidth={true} />
        </div>

        <ButtonDefault text={"Cadastro"} variant={"outlined"} />

        <span>Tem uma conta? <Link to={"/login"}>Entre</Link></span>
      </form>
    </div>
  );
};
