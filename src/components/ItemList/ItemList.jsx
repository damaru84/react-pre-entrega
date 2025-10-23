import { Link } from "react-router-dom";
import { Item } from "../Item/Item";

export const ItemList = ({ lista }) => {
  return (
    <>
      {lista.length ? (
        lista.map((producto) => (
          <Link to={`/detail/${producto.id}`} key={producto.id}>
            <Item {...producto} />
          </Link>
        ))
      ) : (
        <p>No hay productos</p>
      )}
    </>
  );
};
