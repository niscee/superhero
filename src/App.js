import "./App.css";
import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";
import Products from "./components/Products";
import ProductState from "./context/ProductState";

function App() {
  return (
    <div className="container">
      <ProductState>
        <Navbar />
        <Searchbar />
        <Products />
      </ProductState>
    </div>
  );
}

export default App;
