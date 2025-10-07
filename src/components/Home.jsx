import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function Home() {
  const [fashion, setFashion] = useState([]);
  const [footwear, setFootwear] = useState([]);
  const [electronics, setElectronics] = useState([]);
  const [liquor, setLiquor] = useState([]);
  const [jewellery, setJewellery] = useState([]);
  const [cosmetics, setCosmetics] = useState([]);

  useEffect(() => {
    // Fetch from DummyJSON
    fetch("https://dummyjson.com/products?limit=100")
      .then(res => res.json())
      .then(data => {
        const products = data.products;

        setFashion(products.filter(p =>
          p.category === "mens-shirts" || p.category === "womens-dresses"
        ));

        setFootwear(products.filter(p =>
          p.category === "mens-shoes" || p.category === "womens-shoes"
        ));

        setElectronics(products.filter(p =>
          p.category === "smartphones" || p.category === "laptops"
        ));

        setLiquor(products.filter(p => p.category === "fragrances"));

        setCosmetics(products.filter(p =>
          p.category === "skincare" || p.category === "fragrances"
        ));
      });

    // Fetch from FakestoreAPI for jewellery
    fetch("https://fakestoreapi.com/products/category/jewelery")
      .then(res => res.json())
      .then(data => {
        // Convert structure to match ProductCard
        const formatted = data.map(item => ({
          id: item.id + 1000, // ensure unique id
          title: item.title,
          description: item.description,
          price: item.price,
          images: [item.image], // only one image provided
        }));
        setJewellery(formatted);
      });
  }, []);

  return (
    <div className="container my-5">
      <ProductSection title="🧥 Fashion" items={fashion} />
      <ProductSection title="👟 Footwear" items={footwear} />
      <ProductSection title="📱 Electronics" items={electronics} />
      <ProductSection title="🍷 Liquor" items={liquor} />
      <ProductSection title="💄 Cosmetics" items={cosmetics} />
      <ProductSection title="💍 Jewellery" items={jewellery} />
    </div>
  );
}

function ProductSection({ title, items }) {
  return (
    <>
      <h2 className="mb-4 mt-5">{title}</h2>
      <div className="row">
        {items.map((product) => (
          <div className="col-md-4 col-sm-6 mb-4" key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </>
  );
}

function ProductCard({ product }) {
  return (
    <div className="card h-100 shadow-sm">
      <div id={`carousel-${product.id}`} className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {(product.images || []).slice(0, 3).map((img, index) => (
            <div
              className={`carousel-item ${index === 0 ? "active" : ""}`}
              key={index}
            >
              <img
                src={img}
                className="d-block w-100"
                alt={product.title}
                style={{ height: "250px", objectFit: "cover" }}
              />
            </div>
          ))}
        </div>
        {(product.images || []).length > 1 && (
          <>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target={`#carousel-${product.id}`}
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target={`#carousel-${product.id}`}
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
            </button>
          </>
        )}
      </div>
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text text-truncate">{product.description}</p>
        <p className="fw-bold text-primary">${product.price}</p>
        <a href="/product-details" className="btn btn-dark w-100">
          Shop Now
        </a>
      </div>
    </div>
  );
}

export default Home;
