import './App.css';
import HomePage from './Pages/HomePage';
import ProductList from "./Pages/ProductList";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Cart from "./Pages/Cart";
import {
BrowserRouter as Router,
Switch,
Route,
Redirect
} from "react-router-dom";
function App() {
  const user = true;
  return (
    <Router>
      <Switch>

    <Route path = "/" exact>
      <HomePage />
    </Route>
    <Route path = "/products/:id">
      <ProductList />
    </Route>
    <Route path = "/cart">
      <Cart />
    </Route>
    <Route path = "/login">
      {user ? <Redirect to = "/" /> : <Login />}
    </Route>
    <Route path = "/register">
      {user ? <Redirect to = "/" /> : <Register/>}
    </Route>


      </Switch>
    </Router>
  );
}

export default App;
