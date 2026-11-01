import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Outlet } from "react-router";
import { useState } from "react";
import setQuantity from "./helperFunctions/setQuantity";
import useProducts from "./hooks/useProducts";

function App() {
  const [cart, setCart] = useState([]);
  const { products, error, loading } = useProducts("catalogue");

  const handleSetQuantity = (product, quantity) => {
    setCart((currentCart) => setQuantity(currentCart, product, quantity));
  };

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      <Navbar itemCount={cartCount} />
      <main>
        <Outlet context={{ cart, handleSetQuantity, products, loading, error }} />
      </main>
      <Footer />
    </>
  );
}

export default App;
