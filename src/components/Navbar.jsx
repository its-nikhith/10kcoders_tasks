import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div style={{ padding: "15px", background: "#222", color: "white" }}>
      <Link to="/" style={{ marginRight: "15px", color: "white" }}>Home</Link>
      <Link to="/login" style={{ marginRight: "15px", color: "white" }}>Login</Link>
      <Link to="/register" style={{ color: "white" }}>Register</Link>
    </div>
  );
}

export default Navbar;