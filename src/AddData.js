import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormData from "./Form/FormData";

export default function AddData() {
  const navigate = useNavigate();
  const [user, setuser] = useState({});

  const handleChange = (e) => {
    setuser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:4000/posts", user);
    navigate("/table");
    setuser(user);
    console.log(user);
  };
  return (
    <>
      <FormData
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        user={user}
      />
    </>
  );
}
