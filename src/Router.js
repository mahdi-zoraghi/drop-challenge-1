import { Switch, Route } from "react-router-dom"

import { AllDrinks, WithPizza, WithSteak, Favorite, Cart } from "./pages"

const Router = () => (
  <Switch>
    <Route path="/match-with-pizza" component={WithPizza} />
    <Route path="/match-with-steak" component={WithSteak} />
    <Route path="/favorite" component={Favorite} />
    <Route path="/cart" component={Cart} />
    <Route path="/" component={AllDrinks} />
  </Switch>
)

export default Router
