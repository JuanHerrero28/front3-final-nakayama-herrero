
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  const [data, setData] = useState(null);
  const { id } = useParams();
  const [cargando, setCargando] = useState(true);

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
        <h2>Cargando..</h2>
      ) : (
        <div>
          <h1>Detalle del dentista</h1>
          <h3>Nombre: {data.name}</h3>
          <h3>Email: {data.email}</h3>
          <h3>Teléfono: {data.phone}</h3>
          <h3>Sitio web: {data.website}</h3>
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