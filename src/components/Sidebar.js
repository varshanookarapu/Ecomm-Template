import { FaTrash } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h3>Your Cart</h3>

      <div className="items">
        <input type="text" placeholder="Product Name" />
        <FaTrash />
      </div>
    </div>
  );
};

export default Sidebar;
