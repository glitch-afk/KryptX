import { Navbar, Footer, Welcome, Services, Transactions } from "./components";
import "./App.css";

function App() {
  return (
    <div className="main min-h-screen sm:px-0 space-y-16 w-full bg-gray-900">
      <div className="welcome">
        <Navbar />
        <Welcome />
      </div>
      <Services />
      <Transactions />
      <Footer />
    </div>
  );
}

export default App;
