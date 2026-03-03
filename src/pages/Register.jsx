import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const handleRegister = () => {
    if (!name || !email || !password || !confirm) {
      alert("Fill all fields");
      return;
    }

    if (password !== confirm) {
      alert("Passwords do not match");
      return;
    }

    const userData = { name, email, password };
    localStorage.setItem("mockUser", JSON.stringify(userData));

    alert("Registered Successfully!");
    navigate("/login");
  };

  return (
    <div style={{ width: "400px", margin: "auto", paddingTop: "50px" }}>
      <h2>Register</h2>
      <input type="text" placeholder="Name" onChange={e => setName(e.target.value)} /><br /><br />
      <input type="email" placeholder="Email" onChange={e => setEmail(e.target.value)} /><br /><br />
      <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} /><br /><br />
      <input type="password" placeholder="Confirm Password" onChange={e => setConfirm(e.target.value)} /><br /><br />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
}

export default Register;