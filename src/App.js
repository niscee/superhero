import "./App.css";
import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";
import Products from "./components/Products";
import Product from "./components/Product";
import ProductState from "./context/ProductState";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./pages/About";
import Error from "./pages/Error";
import Individual from "./pages/Individual";

function App() {
  return (
    <div className="container">
      <ProductState>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Searchbar />
              <Products />
            </Route>

            <Route exact path="/about" component={About} />

            <Route exact path="/individual/:targetId" component={Individual} />

            <Route path="*" component={Error} />
          </Switch>
        </Router>
      </ProductState>
    </div>
  );
}

export default App;
