# Spectra — Eyewear Store

A minimalist e-commerce storefront for eyewear, built with React. Spectra focuses on clean typography, a restrained visual identity, and a simple shopping experience.

## Tech Stack

- React
- React Router
- JavaScript
- CSS Modules
- Vite
- Vitest
- React Testing Library

## Features

- Responsive homepage and navigation
- Multi-page routing with React Router
- Product data fetching through the Fake Store API
- Reusable cart quantity management logic
- Unit tests for cart helper functions and components

## Getting Started

Clone the repository:

```bash
git clone https://github.com/akshat-tyagi1/shopping-cart.git
```

Navigate into the project:

```bash
cd shopping-cart
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

## Running Tests

```bash
npm test
```

## Project Structure

```text
src/
├── components/
│   ├── Navbar.jsx
│   └── Footer.jsx
├── pages/
│   ├── Home.jsx
│   ├── Shop.jsx
│   ├── Cart.jsx
│   └── ErrorPage.jsx
├── hooks/
│   └── useProducts.js
├── helperFunctions/
│   └── setQuantity.js
├── App.jsx
├── routes.jsx
└── main.jsx
```

## Purpose

Built as part of The Odin Project's React curriculum to practise component-based development, routing, state management, API integration, and testing.

---

**Spectra** — Frames for a more considered view.
