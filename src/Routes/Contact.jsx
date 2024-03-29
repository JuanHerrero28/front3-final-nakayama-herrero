
import { useContextGlobal } from "../Components/utils/global.context";
import Form from '../Components/Form'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

import './Contact.css';

const Contact = () => {
  const { state} = useContextGlobal();
  return (
    <>
    <div className={state.theme ? "containerDarkContact" : "containerLightContact"}>
      <h2 className="contact-title">Want to know more?</h2>
      <p className="contact-description">Send us your questions and we will contact you</p>
    </div>
      <Form/>

    </>
  )
}

export default Contact;
