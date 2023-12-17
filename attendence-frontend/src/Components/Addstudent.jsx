import React, { useState } from "react";

const Addstudent = () => {
  const [data, setdata] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    course: "",
  });

  const [file, setfile] = useState();

  const fileupload = () => {
    setfile();
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };
  return (
    <div>
      <form onSubmit={handlesubmit}>
        <label>firstname</label>
        <input
          type="text"
          name="firstname"
          className=""
          placeholder=""
          onChange={(e) => setdata(e.target.value)}
        />
        <label>firstname</label>
        <input
          type="text"
          name="lastname"
          className=""
          placeholder=""
          onChange={(e) => setdata(e.target.value)}
        />
        <label>firstname</label>
        <input
          type="email"
          name="email"
          className=""
          placeholder=""
          onChange={(e) => setdata(e.target.value)}
        />
        <label>firstname</label>
        <input
          type="password"
          name="password"
          value ={password}
          className=""
          placeholder=""
          onChange={(e) => setdata(e.target.value)}
        />
        <label>course</label>
        <input
          type="text"
          name="course"
       
          className=""
          placeholder=""
          onChange={(e) => setdata(e.target.value)}
        />
        <input type="file" name="image" className="" placeholder="" />
        <button>add</button>
      </form>
    </div>
  );
};

export default Addstudent;
