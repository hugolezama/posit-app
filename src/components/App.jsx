import Home from "./Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SurveyComponent from "./SurveyComponent";
import Demographic from "./Demographic";
import EndPage from "./EndPage";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="content">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/demographic" component={Demographic} />
            <Route path="/survey" component={SurveyComponent} />
            <Route path="/end" component={EndPage} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
