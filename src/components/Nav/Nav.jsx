
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext/useCartContext";
import "./Nav.css";
import logo from "../../assets/logo.png";

export const Nav = () => {
  const { getTotalItems } = useCartContext();

  
  return (
<nav className="navbar">
      {/* 🔹 Logo a la izquierda */}
      <Link to="/" className="logo-link">
        <img src={logo} alt="Logo" className="logo" />
      </Link>

      {/* 🔹 Menú de navegación */}
      <ul className="menu">



   
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/category/antena">Antena</Link>
        </li>
        <li>
          <Link to="/category/gsm">GSM</Link>
        </li>
        <li>
          <Link to="/cart">Carrito</Link> {/* ✅ agregado "to" */}
          {getTotalItems() > 0 && (
            <span className="in-cart">{getTotalItems()}</span>
          )}
        </li>
      </ul>
    </nav>
  );
};
