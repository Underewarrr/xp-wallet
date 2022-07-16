import './App.css';
import { Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux'
import store from './redux/store/index';
import Login from './pages/Login';
<<<<<<< Updated upstream
=======
import Painel from './pages/Painel';
import ManageStock from './pages/ManageStock';
>>>>>>> Stashed changes

function App() {
  
  return (
    <Provider store={store}>
      <Switch>
<<<<<<< Updated upstream
        <Route exact path="/" component={Login} />
=======
        <Route exact path="/" component={ Login } />
        <Route exact path="/painel" component={ Painel } />
        <Route path="/painel/investimentos/comprar/:id:volume" component={ ManageStock } />
>>>>>>> Stashed changes
      </Switch>
    </Provider>
  );
}

export default App;
