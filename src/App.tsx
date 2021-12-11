import { Routes, Route } from "react-router";
import Cart from "./components/cart/Cart";
import ConfirmedScreen from "./components/ConfirmScreen/ConfirmedScreen";
import Dashboard from "./components/dashboard/Dashboard";
import NavBar from "./components/nav/NavBar";



function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/Droppe-Xmas" element={<Dashboard />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/cartNext" element={<ConfirmedScreen />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
