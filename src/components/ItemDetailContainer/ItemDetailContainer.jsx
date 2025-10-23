import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { ItemDetail } from "../ItemDetail/ItemDetail";

export const ItemDetailContainer = () => {
  const [detail, setDetail] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch("/data/products.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Error al obtener detalles del producto");
        }
        return res.json();
      })
      .then((data) => {
        const found = data.find((p) => p.id === Number(id));
        setDetail(found);
      })
      .catch((err) => console.error(err));
  }, [id]);

  if (!detail) return <p>Cargando...</p>;

  return <ItemDetail detail={detail} />;
};
