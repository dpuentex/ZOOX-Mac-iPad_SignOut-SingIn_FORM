import { useState } from "react";
import "../assets/css/FormSignOut.css";
import zooxHeader2 from "../assets/images/zoox-logo-transparent.png";
import zooxBackDrop from "../assets/images/header.08c7a6f0.png";

function FormSignOut() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    asset: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sign Out Data:", form);
  };

  return (
    <div>
      <img className="zooxHeader2" src={zooxHeader2} alt="" />
      <img className="zooxBackDrop" src={zooxBackDrop} alt="" />
      <form className="form" onSubmit={handleSubmit}>
        <h2>Asset Sign Out</h2>
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={form.fullName}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="asset"
          placeholder="Asset #"
          value={form.macNumber}
          onChange={handleChange}
          required
        />

        <button type="submit">Submit Sign Out</button>
      </form>
    </div>
  );
}

export default FormSignOut;
