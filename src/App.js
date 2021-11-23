import { Routes, Route } from "react-router";
import Cart from "./components/cart/Cart";
import Dashboard from "./components/dashboard/Dashboard";
import NavBar from "./components/nav/NavBar";



function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
