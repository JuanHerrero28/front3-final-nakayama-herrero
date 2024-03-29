import { useState } from "react";
import { useContextGlobal } from "./utils/global.context";
import { Link } from "react-router-dom";
import "./Card.css";

const Card = ({ name, username, email, id, image, esFavoritos }) => {
  const { state, dispatch } = useContextGlobal();
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const isAdded = state.favs.some((favorite) => favorite.id === id);

  const addFav = () => {
    const newFavorite = { name, username, email, id, image };
    dispatch({ type: "ADD_FAVORITES", payload: newFavorite });
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const updatedFavorites = [...favorites, newFavorite];
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };

  return (
    <div className={`card ${isImageLoaded ? "fade-in" : ""}`}>
      <Link to={`/detalle/${id}`} className="link-to-detail">
        <img
          className="image-card"
          src={image}
          alt={name}
          onLoad={handleImageLoad}
        />
        <h3 className="title-card">{name}</h3>
        <p className="card-cont">{username}</p>
        <a className="card-cont">{email}</a>
      </Link>
      <button onClick={addFav} className="favButton" disabled={isAdded}>
        {isAdded ? <h3 className="added">Added</h3> : <span className="star" role="img" aria-label="Estrella">⭐️</span>}
      </button>
      {esFavoritos && ( // Mostrar el botón solo si esFavoritos es true
        <button className="btn-re-fav" onClick={()=>dispatch({type:"REMOVE_FAVORITE",payload:id})}>Eliminar Favorito</button>
      )}
    </div>
  );
};

export default Card;








/* El problema que estás experimentando radica en cómo estás pasando el ID a la ruta en el componente Card. Actualmente, estás pasando la cadena "/detalle/:id" como la URL en el atributo to del componente Link, pero esto no está permitiendo que se reemplace :id con el valor real del ID del odontólogo. */

