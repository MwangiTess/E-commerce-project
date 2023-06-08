import React from 'react';

const Cart = ({ cartItems, removeFromCart, clearCart }) => {
  const handleRemoveFromCart = (productId) => {
    removeFromCart(productId);
  };

  const handleClearCart = () => {
    clearCart();
  };

  return (
    <div>
      <div className="container py-5">
        <div className="row py-5">
          <div className="col-12">
            <h1 className="display-6 fw-bolder text-center mb-4">Shopping Cart</h1>
            <table className="table table-hover">
              <thead>
                <tr>
                  <th scope="col">Product</th>
                  <th scope="col">Price</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {cartItems && cartItems.length === 0 ? (
                  <tr>
                    <td colSpan="3" className="text-center">No items in the cart</td>
                  </tr>
                ) : (
                  cartItems && cartItems.map((item) => (
                    <tr key={item.id}>
                      <td>{item.title}</td>
                      <td>${item.price}</td>
                      <td>
                        <button className="btn btn-outline-danger btn-sm" onClick={() => handleRemoveFromCart(item.id)}>
                          Remove
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
            {cartItems && cartItems.length > 0 && (
              <div className="text-center">
                <button className="btn btn-outline-danger me-2" onClick={handleClearCart}>
                  Clear Cart
                </button>
                <button className="btn btn-outline-dark">
                  Checkout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
