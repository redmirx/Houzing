import { BrowserRouter, Route, Routes } from "react-router-dom";

function Root() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<h1>Home</h1>} />
        <Route path="/properties" element={<h1>Properties</h1>} />
        <Route path="*" element={<h1>404 NOT FOUND</h1>} />
        <Route path="/" />
      </Routes>
    </BrowserRouter>
  );
}

export default Root;