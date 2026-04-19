import React from "react";
import UseCustomHooks from "../useCustomhooks/UseCustomHooks";

const HooksFrom = () => {
  const [name, nameOnChange] = UseCustomHooks("");
  const [email, emailOnChange] = UseCustomHooks("");
  const [password, passOnChange] = UseCustomHooks("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit", name, "\n", email, "\n", password);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="user name"
          required
          onChange={nameOnChange}
          defaultValue={name}
        />
        <br />
        <input
          type="email"
          name="email"
          placeholder="email"
          required
          onChange={emailOnChange}
          defaultValue={email}
        />
        <br />
        <input
          type="text"
          name="password"
          placeholder="password"
          required
          onChange={passOnChange}
          defaultValue={password}
        />
        <br />
        <input type="submit" name="submit" />
      </form>
    </div>
  );
};

export default HooksFrom;
