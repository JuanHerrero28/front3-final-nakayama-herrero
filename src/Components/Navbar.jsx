import { Link, Outlet } from "react-router-dom";
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/contacto">Contacto</Link>
        <Link to="/detalle/:id">Detalle Odontologo</Link>
        <Link to="/favs">Favoritos</Link>
        {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
        <button>Change theme</button>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
