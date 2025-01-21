import { useState } from "react";
import "../assets/css/FormSignIn.css";
import zooxHeader3 from "../assets/images/zoox-logo-transparent.png";
import zooxBackDrop from "../assets/images/header.08c7a6f0.png";

function FormSingIn() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    macNumber: "",
    issues: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sign In Data", form);
  };
  return (
    <div>
      <img className="zooxHeader3" src={zooxHeader3} alt="" />
      <img className="zooxBackDrop" src={zooxBackDrop} alt="" />
      <form className="form" onSubmit={handleSubmit}>
        <h2>Asset Sign In</h2>
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

        <textarea
          name="issues"
          placeholder="Issues (if any)"
          value={form.issues}
          onChange={handleChange}
        ></textarea>
        <button type="submit">Submit Sign In</button>
      </form>
    </div>
  );
}

export default FormSingIn;
