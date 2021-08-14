import Navbar from "./components/Navbar";
import Products from "./components/Products";
import "./App.css";
import Sidebar from "./components/Sidebar";

const listOfProducts = [
  { name: "bodywash", price: 200 },
  { name: "facewash", price: 600 },
  { name: "bodybutter", price: 400 },
];

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Products products={listOfProducts} />

        <Sidebar />
      </div>
      <div className="footer">
        <h3>@OnlineShop 2021</h3>
      </div>
    </div>
  );
}

export default App;
