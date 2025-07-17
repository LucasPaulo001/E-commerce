import CircularSize from "../../components/progress/Progress";
import styles from "./Profile.module.css";
import { useSelector } from "react-redux";
import { FaEdit } from "react-icons/fa";
import { InputDefault } from "../../components/input/Input";
import { useEffect, useState } from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import { IoIosCloseCircleOutline } from "react-icons/io";


export const Profile = () => {
  const { user, loading } = useSelector((state) => state.auth);
  const [nome, setNome] = useState("");
  const [showEdit, setShowEdit] = useState(false);

  // Setando nome de usuário ao carregar componente
  useEffect(() => {
    if (user) {
      setNome(user?.name);
    }
  }, [user]);

  const showInputEdit = () => {
    setShowEdit((prev) => !prev);
  };

  return (
    <div className="containerContent">
      {loading ? (
        <CircularSize />
      ) : (
        <div className={styles.contentProfile}>
          <div className={styles.headerCard}>
            <h2>Meu Perfil</h2>
            <p>Gerenciar e proteger sua conta</p>
          </div>
          <hr />
          <div className={styles.dataUser}>
            <div className={styles.editLocal}>
              <span className={`${showEdit ? styles.desactive : ""}`}>
                Nome: <strong>{user?.name}</strong>
              </span>
              <div
                className={`${showEdit ? styles.inputEdit : styles.desactive}`}
              >
                Editar Nome:
                <InputDefault
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  type={"text"}
                />
              </div>
              <FaEdit
                className={`${showEdit ? styles.desactive : styles.inputEdit}`}
                onClick={showInputEdit}
              />
              <FaRegCheckCircle
                className={`${showEdit ? styles.inputEdit : styles.desactive}`}
                style={{color: "green"}}
              />
              <IoIosCloseCircleOutline
                className={`${showEdit ? styles.inputEdit : styles.desactive}`}
                onClick={() => setShowEdit(false)}
                style={{color: "red"}}
              />
            </div>
            <div className={styles.editLocal}>
              <span>
                E-mail: <strong>{user?.email}</strong>
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
