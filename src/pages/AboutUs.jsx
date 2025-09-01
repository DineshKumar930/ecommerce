import "./AboutUs.css";
import React from "react";

export default function AboutUs() {
  return (
    <section className="about-us">
      <div className="container">
        <div className="about-grid">
          <div className="about-image">
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80" 
              alt="About Crazycart"
            />
          </div>
          <div className="about-content">
            <h2>About Crazycart</h2>
            <p>
              At Crazycart, we are passionate about delivering quality products at affordable prices. 
              From electronics and fashion to home essentials, we ensure our customers get the best 
              shopping experience online.
            </p>
            <p>
              Our mission is to bring convenience, quality, and affordability to your doorstep. 
              We believe in innovation, trust, and customer satisfaction as the core values of our brand.
            </p>
            <button onClick={() => alert("Explore our products!")}>Explore Products</button>
          </div>
        </div>
      </div>
    </section>
  );
}
