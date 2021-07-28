import './App.css';
import HomePage from './pages/Home';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import CartPage from './pages/Cart/index'

function App() {
  return (
    <div className="container">
    <Router>
      <Switch>
        <Route path="/" exact>
        <HomePage />
        </Route>
        <Route path="/cart"><CartPage /></Route>
      </Switch>
    </Router>
     
    </div>
  );
}

export default App;
