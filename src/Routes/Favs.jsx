
import Card from "../Components/Card";
import { useContextGlobal } from "../Components/utils/global.context";
import "./Favs.css";

const Favs = () => {
  const {state, dispatch} = useContextGlobal();

  return (
    <div className={state.theme ? "containerDark-home" : "containerLight-home"}>
      <h1 className="title-favs">Dentistas Favoritos</h1>
      <div className="card-grid">
        {state.favs.map((odontologo) => (
          <Card
            key={odontologo.id}
            id={odontologo.id}
            name={odontologo.name}
            username={odontologo.username}
            email={odontologo.email}
            image="/images/doctor.jpg"
            esFavoritos={true} // Prop esFavoritos con valor true
          />
        ))}
      </div>
      <div className="container-btn">
      <button className="btn-clean" onClick={()=>dispatch({type: "REMOVE_ALL"})}>Limpiar Todo</button>

      </div>
    </div>
  );
};

export default Favs;

