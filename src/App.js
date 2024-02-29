import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Login from "./components/Login";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
           <Login />
          </Route>
          {/* <Route exact path="/movies">
            
          </Route>
          <Route exact path="/movies/:id">
          
          </Route>
          <Route exact path="/movies/:id/reviews">
            
          </Route>
          <Route exact path="/movies/:id/reviews/:reviewId">
           
          </Route> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
