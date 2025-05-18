  import { Link, useNavigate } from "react-router-dom";
import { alertaRedireccion } from "../helpers/funciones";

const MenuLateral = () => {
  const redireccion = useNavigate();

  function cerrarSesion() {
    alertaRedireccion("Cerrando sesión", "/", redireccion);
  }

  return (
    <header className="aplicacion__menu-lateral">
      <h1 className="aplicacion__menu-lateral-logo">
        DocuNote<span className="aplicacion__menu-lateral-logo--resaltado"></span>
      </h1>

      <h3>Usuario: {localStorage.getItem("usuario")}</h3>

      <img
        className="aplicacion__menu-lateral-logo-imagen"
        src="/logo.jpg"
        alt="Logo"
      />

      <nav className="aplicacion__menu-lateral-navegacion">
        <Link to="/home" className="aplicacion__menu-lateral-navegacion-item">
          Inicio
        </Link>

        <Link to="/notas" className="aplicacion__menu-lateral-navegacion-item">
          Notas
        </Link>

        <Link to="/examenes" className="aplicacion__menu-lateral-navegacion-item">
          Exámenes
        </Link>

        <button
          onClick={cerrarSesion}
          type="button"
          className="aplicacion__menu-lateral-navegacion-item"
        >
          Cerrar sesión
        </button>
      </nav>
    </header>
  );
};

export default MenuLateral;
