import React, { useState, useEffect } from 'react';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setProducts(data);
      setFilteredProducts(data);
      setLoading(false);
    };

    fetchProducts();
  }, []);

  const Loading = () => {
    return <div>Loading...</div>;
  };

  const filterProducts = (category) => {
    const updatedList = products.filter((product) => product.category === category);
    setFilteredProducts(updatedList);
  };

  const ShowProducts = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-center mb-5 pb-5">
          <button className="btn btn-outline-dark me-2" onClick={() => setFilteredProducts(products)}>
            All
          </button>
          <button className="btn btn-outline-dark me-2" onClick={() => filterProducts("men's clothing")}>
            Men's Clothing
          </button>
          <button className="btn btn-outline-dark me-2" onClick={() => filterProducts("women's clothing")}>
            Women's Clothing
          </button>
          <button className="btn btn-outline-dark me-2" onClick={() => filterProducts('jewelery')}>
            Jewelry
          </button>
          <button className="btn btn-outline-dark me-2" onClick={() => filterProducts('electronics')}>
            Electronics
          </button>
        </div>
        <div className="row">
          {filteredProducts.map((product) => (
            <div className="col-md-3 mb-4" key={product.id}>
              <div className="card h-100 text-center p-4">
                <img src={product.image} className="card-img-top" alt={product.title} height="250px" />
                <div className="card-body">
                  <h5 className="card-title mb-0">{product.title.substring(0, 12)}</h5>
                  <p className="card-text lead fw-bold">${product.price}</p>
                  <p className="lead fw-bolder">
                    Rating: {product.rating && product.rating.rate}
                    <i className="fas fa-star"></i>
                  </p>
                  <a href="#" className="btn btn-outline-dark">
                    Buy Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  };

  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center">Latest Products</h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </div>
  );
};

export default Products;
