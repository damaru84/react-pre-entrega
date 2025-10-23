import { ItemList } from "../ItemList/ItemList";

import { useState, useEffect } from "react"

export const ItemListContainer = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("/data/products.json")
            .then((response) => { 
            if (!response.ok) {
                throw new Error("Error al cargar los productos");
            }
                return response.json();
            })
            .then((data) =>{
                setProducts(data);
            })
            .catch((err) => { 
                console.log(err);
        });

        }, []);


return (
    <section>
        <h1>Bienvenido a Retrocelus</h1>
        <ItemList lista ={products}/>
    </section>
);
};