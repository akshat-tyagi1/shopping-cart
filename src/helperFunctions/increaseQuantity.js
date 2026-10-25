function setQuantity(cart, product, quantity) {
  const newCart = cart.map(
    (item) => (item.id === product.id ? { ...item, quantity: quantity } : item),
  );

  return newCart;
}

export default setQuantity;