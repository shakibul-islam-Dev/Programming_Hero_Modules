import React from "react";

const Simplefrom = () => {
  const handlSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.name.value);
    console.log(e.target.email.value);
  };
  return (
    <div>
      <h1>From Submit</h1>
      <form onSubmit={handlSubmit}>
        <input type="text" name="name" placeholder="Your name" />
        <br />
        <input type="email" name="email" placeholder="email" />
        <br />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default Simplefrom;
