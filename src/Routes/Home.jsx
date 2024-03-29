import { useState, useEffect } from "react";
import axios from "axios";
import Card from "../Components/Card";
import "./Home.css"
import { useContextGlobal } from "../Components/utils/global.context";
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const [odontologos, setOdontologos] = useState([]);
  const url = "https://jsonplaceholder.typicode.com/users";
  const { state } = useContextGlobal();
  useEffect(() => {
    const fetchOdontologos = async () => {
      let res = await axios.get(url);
      setOdontologos(res.data);
    };

    fetchOdontologos();
  }, []);

  return (
    <main className={state.theme ? "containerDark-home" : "containerLight-home"}>
      <h1 className="title-home">Home</h1>
      <div className="card-grid">
        {odontologos.map(
          (odontologo) => (
            <Card
              key={odontologo.id}
              id={odontologo.id}
              name={odontologo.name}
              username={odontologo.username}
              email={odontologo.email}
              image="/images/doctor.jpg"
            />
          )
          //mapear el id si o si
        )}
      </div>
    </main>
  );
};

export default Home;
