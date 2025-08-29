import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import ProductDetails from "./pages/ProductDetails";
import ProductList from "./components/ProductList";
import React, { useState } from "react";

function App() {
  const [page, setPage] = useState("products");
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div>
      <Header onNavigate={setPage} active={page} />
      <main>
        {page === "products" && (
          <ProductList
            onSelectProduct={(product) => {
              setSelectedProduct(product);
              setPage("details");
            }}
          />
        )}
        {page === "details" && selectedProduct && (
          <ProductDetails
            product={selectedProduct}
            onBack={() => setPage("products")}
          />
        )}
        {page === "cart" && <Cart onNavigate={setPage} />}
        {page === "checkout" && <Checkout />}
      </main>
      <Footer />
    </div>
  );
}

export default App;
