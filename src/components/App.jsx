import Home from "./Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SurveyComponent from "./SurveyComponent";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/survey">
              <SurveyComponent />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
