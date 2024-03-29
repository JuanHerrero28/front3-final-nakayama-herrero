
import { useContextGlobal } from "./utils/global.context";
import './Footer.css';

const Footer = () => {
  const { state } = useContextGlobal();
  return (
    <footer className={state.theme ? "containerDarkFoo" : "containerLightFoo"}>
      <p className="parrafo-footer">Powered by</p>
        <img src="./images/DH.png" alt='DH-logo' className="logo" />
      <div className="icon-container">
        <img src="./images/ico-facebook.png" alt='icon1' className="icon" />
        <img src="./images/ico-instagram.png" alt='icon2' className="icon" />
        <img src="./images/ico-tiktok.png" alt='icon3' className="icon" />
        <img src="./images/ico-whatsapp.png" alt='icon4' className="icon" />
      </div>
    </footer>
  );
};

export default Footer;
