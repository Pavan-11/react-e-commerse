import React, { useState, useEffect } from 'react';

const EcommerceApp = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const storedProducts = localStorage.getItem('products');
    if (storedProducts) {
      setProducts(JSON.parse(storedProducts));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products));
  }, [products]);

  const addProduct = (category, name, price) => {
    const newProduct = {
      id: Date.now(),
      category: category,
      name: name,
      price: price
    };
    setProducts([...products, newProduct]);
  };

  const removeProduct = (id) => {
    const updatedProducts = products.filter((product) => product.id !== id);
    setProducts(updatedProducts);
  };

  return (
    <div>
      <h1>E-commerce App</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const category = e.target.elements.category.value;
          const productName = e.target.elements.productName.value;
          const price = e.target.elements.price.value;
          addProduct(category, productName, price);
          e.target.reset();
        }}
      >
        <label htmlFor="price">Price:</label>
        <input type="number" name="price" placeholder="Selling price" />
        <label htmlFor="productName">Product Name:</label>
        <input type="text" name="productName" placeholder="Product name" />
        <label htmlForm="category" >Choose a category</label>
        <select name="category" placeholder="category">
          <option value="/"></option>
          <option value="electronics">Electronics</option>
          <option value="clothing">Clothes</option>
          <option value="food-item">Food</option>
          <option value="fuel">Fuel</option>
        </select>
        <button type="submit">Add Product</button>
      </form>
      <table>
        <h2>Products</h2>
        <h3 className="electronics">Electronics</h3>
        <h3>Clothing</h3>
        <h3>Food Item</h3>
        <h3>Fuel</h3>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.category}</td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>
                <button onClick={() => removeProduct(product.id)}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EcommerceApp;