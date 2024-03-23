import { Outlet } from "react-router-dom"

const Footer = () => {
  return (
    <>
    <Outlet/>
    <footer>
        <p>Powered by</p>
        <img src="./img/DH.png" alt='DH-logo' />
    </footer>
    </>
  );
};

export default Footer
