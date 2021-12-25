import { HomePage } from "./homePage/homePage";
import { BrowserRouter, Route } from "react-router-dom";
import { NavBar } from "./navBar/navBar";
import { AllTheProducts } from "./products/products";
import { EditProduct } from "./editProduct/editProduct";
import "./App.css"

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Route path="/" exact component={HomePage} />
        <Route path="/products" exact component={AllTheProducts} />
        <Route path="/edit/:id" exact component={EditProduct} />
      </BrowserRouter>
    </div>
  );
}

export default App;
