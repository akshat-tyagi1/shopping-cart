import "./App.css";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router";
import { useState } from "react";
import setQuantity from "./helperFunctions/setQuantity";
import useProducts from "./hooks/useProducts";

const fakeCart = [
  {
    id: 1,
    title: "Backpack, Fits 15 Laptops",
    price: 109.95,
    image: "https://placehold.co/100x100",
    quantity: 2,
  },
  {
    id: 2,
    title: "Mens Casual Slim Fit T-Shirt",
    price: 22.3,
    image: "https://placehold.co/100x100",
    quantity: 3,
  },
];

function App() {
  const [cart, setCart] = useState(fakeCart);
  const { products, error, loading } = useProducts();

  const handleSetQuantity = (product, quantity) => {
    setCart((currentCart) => setQuantity(currentCart, product, quantity));
  };

  const quantity = cart.reduce((sum, current) => sum + current.quantity, 0);

  return (
    <>
      <Navbar itemCount={quantity} />
      <Outlet context={{ cart, handleSetQuantity }} />
    </>
  );
}

export default App;
