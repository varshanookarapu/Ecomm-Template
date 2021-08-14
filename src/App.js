import Navbar from "./components/Navbar";
import Products from "./components/Products";
import "./App.css";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Products />
        <Sidebar />
      </div>
      <div className="footer">
        <h3>@OnlineShop 2021</h3>
      </div>
    </div>
  );
}

export default App;
