import { render, renderHook, waitFor } from "@testing-library/react";
import useProducts from "./useProducts";
import { afterEach } from "vitest";

const fakeApiData = [
  {
    id: 1,
    title: "Backpack",
    price: 109.95,
    image: "a.jpg",
    description: "Long text",
    category: "bags",
  },
  {
    id: 2,
    title: "T-Shirt",
    price: 22.3,
    image: "b.jpg",
    description: "More text",
    category: "clothing",
  },
];

describe("useProducts", () => {
  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it("returns the products after a successful fetch", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: true,
        json: async () => fakeApiData,
      }),
    );

    const { result } = renderHook(() => useProducts());

    await waitFor(() => expect(result.current.loading).toBe(false));

    expect(result.current.products).toEqual([
      { id: 1, title: "Backpack", price: 109.95, image: "a.jpg" },
      { id: 2, title: "T-Shirt", price: 22.3, image: "b.jpg" },
    ]);
    expect(result.current.error).toBe("");
  });

  it("suggest a name for hte test", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn(() => new Promise(() => {})),
    );

    const { result } = renderHook(() => useProducts());

    expect(result.current.loading).toBe(true);
    expect(result.current.products).toEqual([]);
    expect(result.current.error).toBe("");
  });

  it("suggest a name for hte test", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: false,
        status: 500,
      }),
    );

    const { result } = renderHook(() => useProducts());

    await waitFor(() => expect(result.current.loading).toBe(false));

    expect(result.current.products).toEqual([]);
    expect(result.current.error).toBe("HTTP error: 500");
  });
});
