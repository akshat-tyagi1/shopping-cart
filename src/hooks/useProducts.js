import { useEffect, useState } from "react";
import catalogue from "../data/catalogue";

function useProducts(source = "api") {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (source === "catalogue") {
      setProducts(catalogue);
      setLoading(false);
      return undefined;
    }

    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");

        if (!response.ok) {
          throw new Error(`HTTP error: ${response.status}`);
        }

        const data = await response.json();

        const items = data.map((item) => ({
          id: item.id,
          title: item.title,
          price: item.price,
          image: item.image,
        }));

        setProducts(items);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [source]);

  return { products, error, loading };
}

export default useProducts;
