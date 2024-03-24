import { useState } from "react";
import './Form.css'


const Form = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [err, setErr] = useState(false);
  const [show, setShow] = useState(false);


  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      nombre.trim().length >= 3 &&
      validacionEmail(email)
    ) {
      setShow(true);
      setErr(false);
    } else {
      setErr(true);
    }
    
  };

  const validacionEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  return (
    <div className="form-container">
     <h1>Contacto</h1>
      {show ? null :
        <form onSubmit={handleSubmit}>
          <label>Nombre:</label>
          <input
            type="text"
            onChange={(e) => setNombre(e.target.value)}
          ></input>
          <label>Email</label>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <button>Enviar</button>
        </form>
      }
      {show ?
      <>
       <p>Gracias {nombre}, te contactaremos cuanto antes vía mail</p>
      </>
      : <h4>Coloque los datos para enviar el formulario</h4>
      }
      {err ? (
        <p className="err-form">Por favor verifique su información nuevamente</p>
      ) : null}
    </div>
  );
};

export default Form;



/* En esta pagina deberán implementar un [Form](/src/Components/Form.jsx) (con sus validaciones pertinentes) que capture la información del usuario que desea contactar con la empresa. Los campos serán los siguientes:

- Nombre completo (con longitud mayor a 5)
- Email (con formato correcto de email)
- En caso de haber un error mostrar el siguiente mensaje de error: **Por favor verifique su información nuevamente**
- Una vez "enviado"( no se envía a ningún servidor pero podemos mostrar por consola los datos submiteados) el formulario deberán mostrar un mensaje de éxito que contenga el siguiente formato: **Gracias _[nombre del usuario]_, te contactaremos cuando antes vía mail** */