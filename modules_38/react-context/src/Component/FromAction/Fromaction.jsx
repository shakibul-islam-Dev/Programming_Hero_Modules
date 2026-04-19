import React from "react";

const Fromaction = () => {
  const handleAction = (fromData) => {
    // fromaction.preventDefault();
    console.log(fromData.get("name"));
    console.log(fromData.get("email"));
  };
  return (
    <div>
      <form action={handleAction}>
        <input type="text" name="name" placeholder="Name" />
        <br />
        <input type="text" name="email" placeholder="email" />
        <br />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default Fromaction;
