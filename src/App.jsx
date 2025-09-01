import AboutUs from "./pages/AboutUs";
import BlogNews from "./pages/BlogNews";
import Cart from "./components/cart/Cart";
import Checkout from "./pages/Checkout";
import ContactUs from "./pages/ContactUs";
import EditProfile from "./pages/EditProfile";
import FAQ from "./pages/FAQ";
import Help from "./pages/Help";
import Layout from "./components/layout/Layout";
import Login from "./pages/Login";
import OrderHistory from "./pages/OrderHistory";
import PrivacyPolicy from "./pages/PravicyPolicy";
import ProductDetails from "./pages/ProductDetails";
import ProductList from "./components/product/ProductList";
import Profile from "./pages/Profile";
import React, { useState } from "react";
import Register from "./pages/Register";
import ReturnsAndExchanges from "./pages/ReturnsAndExchanges";
import ShippingInfo from "./pages/ShippingInfo";
import TermsConditions from "./pages/TermsCondition";
import TrackOrder from "./pages/TrackOrder";
import { Route, Routes } from "react-router-dom";

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <Layout>
      <Routes>
        {/* Home / Product List */}
        <Route
          path="/"
          element={
            <ProductList
              onSelectProduct={(product) => setSelectedProduct(product)}
            />
          }
        />
        <Route
          path="/details"
          element={
            selectedProduct ? (
              <ProductDetails product={selectedProduct} />
            ) : (
              <p style={{ padding: "20px", textAlign: "center" }}>
                No product selected. Go back to <a href="/">Products</a>.
              </p>
            )
          }
        />

        {/* Cart & Checkout */}
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />

        {/* Auth Pages */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Profile Pages */}
        <Route path="/profile" element={<Profile />} />         {/* ✅ Profile Page */}
        <Route path="/profile/edit" element={<EditProfile />} /> {/* ✅ Edit Profile */}

        {/* Footer / Info Pages */}
        <Route path="/about" element={<AboutUs />} />
        <Route path="/blogs" element={<BlogNews />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/returns" element={<ReturnsAndExchanges />} />
        <Route path="/shipping" element={<ShippingInfo />} />
        <Route path="/terms" element={<TermsConditions />} />
        <Route path="/track-order" element={<TrackOrder />} />
        <Route path="/help" element={<Help />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/orders" element={<OrderHistory />} />
      </Routes>
    </Layout>
  );
}

export default App;
