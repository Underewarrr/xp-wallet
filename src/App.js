import './App.css';
import { Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux'
import store from './redux/store/index';
import Login from './pages/Login';
import Painel from './pages/Painel';
<<<<<<< Updated upstream
import ManageStock from './pages/ManageStock';

function App() {
  
=======
import Balance from './pages/Balance';
import BuyStock from './pages/BuyStock';

function App() {

>>>>>>> Stashed changes
  return (
    <Provider store={store}>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/painel" component={ Painel } />
<<<<<<< Updated upstream
        <Route path="/painel/investimentos/comprar/:id:volume" component={ ManageStock } />
=======
        <Route exact path="/painel/investimentos/comprar/:id" component={ BuyStock } />
        <Route exact path="/painel/investimentos/saldo" component={ Balance } />
>>>>>>> Stashed changes
      </Switch>
    </Provider>
  );
}

export default App;
