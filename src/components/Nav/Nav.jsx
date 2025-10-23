
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext/useCartContext";
import "./Nav.css";


export const Nav = () => {
  const { getTotalItems } = useCartContext();

  
  return (
    <nav>
      <ul>
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
