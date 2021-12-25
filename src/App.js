import { HomePage } from "./homePage/homePage";
import { BrowserRouter, Route } from "react-router-dom";
import { NavBar } from "./navBar/navBar";
import { AllTheProducts } from "./products/products";
import { EditProduct } from "./editProduct/editProduct";
import { AddProduct } from "./addProduct/addProduct";
import "./App.css"

function App() {
  // const [cartCounter, setCartCounter] = useState(0);
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Route path="/" exact component={HomePage} />
        <Route path="/products" exact component={AllTheProducts} />
        <Route path="/edit/:id" exact component={EditProduct} />
        <Route path="/Add" exact component={AddProduct} />
      </BrowserRouter>
    </div>
  );
}

export default App;
