import { BrowserRouter, Routes, Route } from
'react-router-dom';
import Navbar from "./components/NavbarApp"
import Inicio from "./pages/Inicio"

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Inicio></Inicio>}></Route>
          {/* /*<Route
            exact
            path="/Administrador"
            element={<Administrador></Administrador>}
          ></Route>
          <Route
            path="*"
            element={<Error404></Error404>}
          ></Route> */}
        </Routes>
        {/* <Footer></Footer> */}
      </BrowserRouter>
    </>
  );
}

export default App;