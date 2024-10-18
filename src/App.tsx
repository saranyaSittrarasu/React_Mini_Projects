import "./App.css";
import AppRouter from "./Router";
import Navbar from "./NavBar";

function App() {
  return (
    <div className="flex">
      <Navbar />

      {/* <div className="ml-48 flex-1 flex justify-center items-center p-8"> */}
      <div className="ml-48 flex-1 flex justify-center items-center h-screen">
        <AppRouter />
      </div>
    </div>
  );
}

export default App;
