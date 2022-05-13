import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import TableData from "./TableData";

export default function TableDataParent() {
  useEffect(() => {
    getData();
  });
  const [data, setData] = useState([]);
  const getData = async () => {
    const res = await axios.get("http://localhost:4000/posts");
    setData(res.data);
  };

  const handelDelete = async (id) => {
    const res = await axios.delete(`http://localhost:4000/posts/${id}`);
    console.log(res.data, ";lllllllllllll");
    getData();
  };

  return (
    <>
      <TableData data={data} handelDelete={handelDelete} />
    </>
  );
}
