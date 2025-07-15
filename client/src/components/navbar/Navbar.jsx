import IconButton from "@mui/material/IconButton";
import { InputDefault } from "../input/Input";
import styles from "./Navbar.module.css";
import { styled } from '@mui/material/styles';
import { IoMdSearch } from "react-icons/io";
import { Link } from "react-router-dom";
import Badge, { badgeClasses } from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCartOutlined';

export const Navbar = () => {

  const CartBadge = styled(Badge)`
  & .${badgeClasses.badge} {
    top: -12px;
    right: -6px;
  }
`;

  return (
    <div className={styles.navbar}>
      <div></div>
      <div className="localInputHome">
        <InputDefault
          type={"search"}
          label={"Buscar algo"}
          variant={"filled"}
          fullWidth={true}
        />
        <button className={styles.btnDetail}>
          <IoMdSearch />
        </button>
      </div>
      <button className={`${styles.btnDetail} ${styles.btnCar}`}>
        <IconButton>
          <ShoppingCartIcon fontSize="small" />
          <CartBadge badgeContent={0} color="primary" overlap="circular" />
        </IconButton>
      </button>
      <div>
        <span>
          <Link className="link" to={"/register"}>
            Cadastrar
          </Link>{" "}
          |{" "}
          <Link className="link" to={"/login"}>
            Entrar
          </Link>
        </span>
      </div>
    </div>
  );
};
