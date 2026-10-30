function setQuantity(cart, product, quantity) {
  if (quantity <= 0) {
    return cart.filter((item) => item.id !== product.id);
  }

  const exists = cart.some((item) => item.id === product.id);

  if (!exists) {
    return [...cart, { ...product, quantity }];
  }

  return cart.map((item) =>
    item.id === product.id ? { ...item, quantity } : item,
  );
}

export default setQuantity;
