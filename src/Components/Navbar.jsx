import { Link, Outlet } from "react-router-dom";
import { useContextGlobal } from "./utils/global.context";
import "./Navbar.css";
const Navbar = () => {
  const { state, dispatch } = useContextGlobal();

  return (
    <>
      <nav className={state.theme ? "containerDark" : "containerLight"}>
        <Link className="link-nav" to="/">
          <span>Home</span>
        </Link>
        <Link className="link-nav" to="/contacto">
          <span>Contacto</span>
        </Link>
        <Link className="link-nav" to="/favs">
          <span>Favoritos</span>
        </Link>
        <button className="btn-change-mode" onClick={() => dispatch({ type: "CHANGE_MODE" })}>
        {state.theme ? (
          <>
            Cambiar <span role="img" aria-label="Luz">💡</span>
          </>
        ) : (
          <>
            Cambiar <span role="img" aria-label="Luna">🌙</span>
          </>
        )}
        </button>

      </nav>
      
      <Outlet />
    </>
  );
};

export default Navbar;
