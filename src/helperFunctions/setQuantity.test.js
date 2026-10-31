import setQuantity from "./setQuantity";

describe("setQuantity", () => {
  const cart = [
    { id: 1, title: "Backpack", price: 109.95, image: "a.jpg", quantity: 2 },
    { id: 2, title: "T-Shirt", price: 22.3, image: "b.jpg", quantity: 3 },
  ];

  it("updates the quantity of an item already in the cart", () => {
    const product = { id: 1, title: "Backpack", price: 109.95, image: "a.jpg" };

    const result = setQuantity(cart, product, 5);

    expect(result).toHaveLength(2);
    expect(result.find((item) => item.id === 1).quantity).toBe(5);
    expect(result.find((item) => item.id === 2).quantity).toBe(3);
  });

  it("adds a new entry when the product is not in the cart", () => {
    const product = { id: 3, title: "Ring", price: 695, image: "c.jpg" };

    const result = setQuantity(cart, product, 1);

    expect(result).toHaveLength(3);
    expect(result.find((item) => item.id === 3)).toEqual({
      ...product,
      quantity: 1,
    });
  });

  it("remove the entry when quantity is set to 0", () => {
    const product = { id: 1, title: "Backpack", price: 109.95, image: "a.jpg" };

    const result = setQuantity(cart, product, 0);

    expect(result).toHaveLength(1);
    expect(result.find((item) => item.id === 1)).toEqual(undefined);
  });

  it("does not mutate the original cart", () => {
    const product = { id: 1, title: "Backpack", price: 109.95, image: "a.jpg" };
    const copy = structuredClone(cart);

    setQuantity(cart, product, 5);

    expect(cart).toEqual(copy);
  });

  it("does not add a product if it doesn't exist and quantity is 0", () => {
    const product = {
      id: 3,
      title: "Round Glasses",
      price: 1800,
      image: "c.jpg",
    };

    const result = setQuantity(cart, product, 0);

    expect(result).toHaveLength(2);
    expect(result.find((item) => item.id === 3)).toBeUndefined();
  });
});
