import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import AddData from "./AddData";
import TableData from "./Form/TableData";
import TableDataParent from "./Form/TableDataParent";
import EditData from "./Form/EditData";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AddData />} />
        <Route path="/table" element={<TableDataParent />} />
        <Route path="/Edit/:id" element={<EditData />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
