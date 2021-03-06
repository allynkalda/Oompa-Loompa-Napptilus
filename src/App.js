import './App.css';
import Landing from './pages/Landing';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { StateProvider } from './state/state';
import Detail from './pages/Detail';

function App() {
  return (
    <div className="App">
      <StateProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Landing />
            </Route>
            <Route exact path="/:id">
              <Detail />
            </Route>
          </Switch>
        </Router>
      </StateProvider>
    </div>
  );
}

export default App;
