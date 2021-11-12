import Dashboard from "./components/dashboard/Dashboard";
import NavBar from "./components/nav/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <Dashboard />
      </div>
    </>
  );
}

export default App;
