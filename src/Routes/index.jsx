import { Switch, Route } from "react-router";
import { Products } from "../pages/Products";
import { MyCart } from "../pages/MyCart";
export const Routes = () => (
  <Switch>
    <Route exact path="/" component={Products} />
    <Route path="/cart" component={MyCart} />
  </Switch>
);
