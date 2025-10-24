import { Link } from "react-router-dom";
import { Item } from "../Item/Item";
import "./ItemList.css"; // 👈 Importá el CSS

export const ItemList = ({ lista }) => {
  return (
    <div className="item-list">
      {lista.length ? (
        lista.map((producto) => (
          <Link to={`/details/${producto.id}`} key={producto.id}>
            <Item {...producto} />
          </Link>
        ))
      ) : (
        <p>No hay productos</p>
      )}
    </div>
  );
};
