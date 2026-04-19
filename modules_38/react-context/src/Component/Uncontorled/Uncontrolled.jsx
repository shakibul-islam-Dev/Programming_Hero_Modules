import React, { useRef } from "react";

const Uncontrolled = () => {
  const emailRef = useRef("");
  const passRef = useRef("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(emailRef.current.value);
    console.log(passRef.current.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input ref={emailRef} type="email" name="email" /> <br />
        <input
          ref={passRef}
          type="password"
          type="passwrod"
          name="password"
        />{" "}
        <br />
        <input type="submit" name="submit" id="" />
      </form>
    </div>
  );
};

export default Uncontrolled;
