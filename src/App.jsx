import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Detail from "./Routes/Detail";
import Contact from "./Routes/Contact";
import Home from "./Routes/Home";
import Favs from "./Routes/Favs";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <div className="App">
          <Route element={<Navbar />}>
            <Route path="/" element={<Home />} />
            <Route path="/contacto" element={<Contact />} />
            <Route path="/detalle/:id" element={<Detail />} />
            <Route path="/favs" element={<Favs />} />
          </Route>

          <Route element = {<Footer/>}/>
        </div>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
