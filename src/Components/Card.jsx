import { Link } from "react-router-dom";

const Card = ({ name, username, email }) => {
  const addFav = () => {
    // Aqui iria la logica para agregar la Card en el localStorage
  };

  return (
    <Link to="/detalle/:id">
      <div className="card">
        {/* En cada card deberan mostrar en name - username y el id */}
        <h3>{name}</h3>
        <p>{username}</p>
        <a>{email}</a>

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} className="favButton">
          Add fav
        </button>
      </div>
    </Link>
  );
};

export default Card;
