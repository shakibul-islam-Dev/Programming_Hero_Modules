import React, { useState } from "react";

const ControlledField = () => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword); // State update korte hobe
    console.log(newPassword);
    if (newPassword.length < 6) {
      setError("password must be 6 character long");
    } else {
      setError(" ");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted password:", password);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="email" name="email" required />
        <br />
        <input
          type="password"
          required
          name="password"
          placeholder="password"
          onChange={handleChange}
          value={password}
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
      <p style={{ color: "red" }}>{error}</p>
    </div>
  );
};

export default ControlledField;
