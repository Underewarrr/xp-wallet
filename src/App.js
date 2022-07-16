import './App.css';
import { Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux'
import store from './redux/store/index';
import Login from './pages/Login';

function App() {
  return (
    <Provider store={store}>
      <Switch>
        <Route exact path="/" component={Login} />
      </Switch>
    </Provider>
  );
}

export default App;
