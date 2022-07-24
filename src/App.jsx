import './App.css';
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store/index';
import Login from './pages/Login';
import Painel from './pages/Painel';
import Balance from './pages/Balance';
import BuyStock from './component/BuyStock';
import Profile from './pages/Profile';
import SellStock from './component/SellStock';

function App() {
  return (
    <Provider store={store}>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/painel" component={Painel} />
        <Route exact path="/painel/investimentos/comprar/:id" component={BuyStock} />
        <Route exact path="/painel/investimentos/vender/:id" component={SellStock} />
        <Route exact path="/painel/investimentos/saldo" component={Balance} />
        <Route exact path="/painel/perfil" component={Profile} />
      </Switch>
    </Provider>
  );
}

export default App;
