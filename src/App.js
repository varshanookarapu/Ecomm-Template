import { FaTrash } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="navbar">
        <div className="logo">
          <h3>Online Shop</h3>
        </div>

        <div className="search">
          <input type="text" id="input1" placeholder="Search"></input>
          <FaSearch id="searchicon" />
        </div>

        <div className="services">
          <button className="btn">Orders</button>
          <button className="btn">Login</button>
        </div>
      </div>
      <div className="container">
        <div className="products">
          <h1>Products</h1>

          <div className="product-item">
            <div className="product-img"> </div>

            <div className="label">
              <label>Name</label>
              <button id="prodbtn">Add to Cart</button>
            </div>
          </div>
        </div>
        <div className="sidebar">
          <h3>Your Cart</h3>

          <div className="items">
            <input type="text" placeholder="Product Name" />
            <FaTrash />
          </div>
        </div>
      </div>
      <div className="footer">
        <h3>@OnlineShop 2021</h3>
      </div>
    </div>
  );
}

export default App;
