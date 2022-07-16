import './App.css';
import { Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux'
import store from './redux/store/index';
import Login from './pages/Login';
import Painel from './pages/Painel';
import ManageStock from './pages/ManageStock';

function App() {
  
  return (
    <Provider store={store}>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/painel" component={ Painel } />
        <Route path="/painel/investimentos/comprar/:id:volume" component={ ManageStock } />
      </Switch>
    </Provider>
  );
}

export default App;
