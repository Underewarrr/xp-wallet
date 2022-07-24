import './App.css';
import { Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux'
import store from './redux/store/index';
import Login from './pages/Login';
import Painel from './pages/Painel';
import Balance from './pages/Balance';
import BuyStock from './component/BuyStock';
import Profile from './pages/Profile';
import SellStock from './component/SellStock';
import { AiOutlineHeart } from 'react-icons/ai';

function App() {

  return (
    <>
    <Provider store={store}>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/painel" component={ Painel } />
        <Route exact path="/painel/investimentos/comprar/:id" component={ BuyStock } />
        <Route exact path="/painel/investimentos/vender/:id" component={ SellStock } />
        <Route exact path="/painel/investimentos/saldo" component={ Balance } />
        <Route exact path= "/painel/perfil" component={ Profile }  />
      </Switch>
    </Provider>
    <div className="footer-bar">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="footer-bar-content">
                        <div className="footer-bar-content-left">
                            <p>
                                <span>
                                    Design with <AiOutlineHeart /> by <a 
                                    style={{textDecoration: 'none'}}
                                    href="https://www.github.com/underewarrr">Rafhael Oliveira</a>
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  );
}

export default App;
