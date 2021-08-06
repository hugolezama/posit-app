import Home from "./Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SurveyComponent from "./SurveyComponent";
import Demographic from "./Demographic";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/demographic">
              <Demographic />
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
