import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Restaurant from "./pages/Restaurant";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Switch>
            <Route exact path="/">
              <h1>Restaurants dfsfsfre Yerevan</h1>
              <Home />
            </Route>
            <Route path="/:id">
              <Restaurant />
            </Route>
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
