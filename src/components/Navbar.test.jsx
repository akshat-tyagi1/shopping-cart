import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import Navbar from "./Navbar";
import { describe, expect } from "vitest";
import { it } from "vitest";

const renderNavbar = (itemCount = 0) => {
  render(
    <MemoryRouter>
      <Navbar itemCount={itemCount} />
    </MemoryRouter>,
  );
};

describe("Navbar", () => {
  it("shows the cart count in the cart link", () => {
    renderNavbar(3);

    expect(screen.getByRole("link", { name: "Cart (3)" })).toBeInTheDocument();
  });

  it("links to the correct routes", () => {
    renderNavbar(3);

    expect(screen.getByRole("link", { name: "Home" })).toHaveAttribute(
      "href",
      "/",
    );

    expect(screen.getByRole("link", { name: "Shop" })).toHaveAttribute(
      "href",
      "/shop",
    );

    expect(screen.getByRole("link", { name: /cart/i })).toHaveAttribute(
      "href",
      "/cart",
    );
  });

  it("shows the correct cart count", () => {
    renderNavbar(0);

    expect(screen.getByRole("link", { name: "Cart (0)" })).toBeInTheDocument();
  });
});
