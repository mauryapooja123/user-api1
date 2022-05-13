import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import FormData from "./FormData";

export default function EditData() {
  const navigate = useNavigate();
  useEffect(() => {
    getEditData();
  }, []);
  const { id } = useParams();
  const [user, setuser] = useState({});
  const [allData, setAllData] = useState([]);

  const handleChange = (e) => {
    setuser({ ...user, [e.target.name]: e.target.value });
  };

  const getEditData = async () => {
    await axios.get(`http://localhost:4000/posts/${id}`).then((res) => {
      console.log(res.data, "ppppp33333333pppp");
      setuser(res.data);
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (user) {
      await axios.put(`http://localhost:4000/posts/${id}`, user).then((res) => {
        setuser(res.data);
      });
    }
    navigate("/table");
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
