
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useContextGlobal } from "../Components/utils/global.context";
import "./Detail.css";

const Detail = () => {
  const [data, setData] = useState(null);
  const { id } = useParams();
  const [cargando, setCargando] = useState(true);
  const { state} = useContextGlobal();

  useEffect(() => {
    const fetchDentist = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        if (!response.ok) {
          throw new Error('Fallo la conexión');
        }
        const userData = await response.json();
        setData(userData);
        setCargando(false);
      } catch (error) {
        console.error(error);
        setCargando(true);
      }
    };

    fetchDentist();
  }, [id]);

  return (
    <>
      {cargando ? (
        <h2 className="loading-text">Cargando..</h2>
      ) : (
        <div className={state.theme ? "containerDarkDetail" : "containerLightDetail"}>
          <h1 className="detail-dentist">Detalle del dentista</h1>
          <table className="detail-table">
            <tbody>
              <tr>
                <td>Nombre:</td>
                <td>{data.name}</td>
              </tr>
              <tr>
                <td>Email:</td>
                <td>{data.email}</td>
              </tr>
              <tr>
                <td>Teléfono:</td>
                <td>{data.phone}</td>
              </tr>
              <tr>
                <td>Sitio web:</td>
                <td>{data.website}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default Detail;




//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context



/* ### Pagina 3: Detalle del dentista

En esta página se deberá mostrar un detalle de un dentista individual de la API.

Se deberá tener en cuenta lo siguiente:

- Deberá estar en la ruta `/dentist/:id`.
- La página deberá indicar al menos la siguiente información:
  - Nombre del personaje
  - Email
  - Telefono
  - Sitio web */