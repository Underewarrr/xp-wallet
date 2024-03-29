import { React, useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { FaMoneyBillAlt } from 'react-icons/fa';
import Button from 'react-bootstrap/Button';
import { FaArrowAltCircleLeft, FaUserCircle } from 'react-icons/fa';
import { BiLogOutCircle, BiReset } from 'react-icons/bi';
import Link from 'react-router-dom/Link';
import './styles/Header.css';
import { Alert } from 'react-bootstrap';

const Header = (props) => {

// get from localStorage and set to userEmail
const [userEmail, setUserEmail] = useState('');
const [userBalance, setUserBalance] = useState(0);
const [resetSuccess, setResetSuccess] = useState(false);
// get userBalance from localStorage

// update  balance each time user add or remove balance
useEffect(() => {
    const userBalance = JSON.parse(localStorage.getItem('userBalance'));
    if (userBalance) {
        setUserBalance(userBalance);
    }
}
, []);

useEffect(() => {
    const userEmail = localStorage.getItem('userEmail');
    setUserEmail(userEmail);
}
, [])

function pushToLogout () {
    localStorage.removeItem('userEmail');
    localStorage.removeItem('userBalance');
    localStorage.removeItem('userStocks');
    localStorage.removeItem('buyedStock');
    window.location.href = '/';
}
  return (
    <Navbar>
    <Container>
      <Navbar.Brand href="">
      <Link 
      to="/painel">   
      <img
              alt=""
              src="https://logospng.org/download/xp-investimentos/logo-xp-investimentos-icon-1536.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            /> 
              
                                           
          </Link>
        <code><p>
          <Link
          to="/painel/investimentos/saldo"
          >
          <FaMoneyBillAlt style={{ color: 'black'}}
        />
        </Link>
           {' '}Saldo R$ {userBalance.toFixed(2)}</p>
           <p>
          <BiReset 
          onClick={
            () => {
              localStorage.removeItem('userEmail');
    localStorage.removeItem('userBalance');
    localStorage.removeItem('userStocks');
    localStorage.removeItem('buyedStock');
    setResetSuccess(true);
    setTimeout(() => {
      setResetSuccess(false);
    }
    , 3000);
            }
          }
          style={{ color: 'black', cursor: 'pointer' }}
          />
           {' '}Resetar LocalStorage</p>
           </code>
          
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
      <Alert variant="success" show={resetSuccess}>
          <Alert.Heading>Sucesso!</Alert.Heading>
          <p>
            LocalStorage foi resetado com sucesso!
          </p>
        </Alert>
        <Navbar.Text>
          <Link to="/painel/perfil">
          <FaUserCircle 
          style={{ color: 'black', cursor: 'pointer' }}
          /> <p
          className='text-muted'
          id='userEmail'
          >{userEmail}</p>
          </Link>
        </Navbar.Text>                   
        
      </Navbar.Collapse>
     <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
          <Button
          onClick={pushToLogout}
          variant="secondary" size="lg">
              Sair <BiLogOutCircle 
              style={{ color: 'black', cursor: 'pointer' }}
              />
              <i>
              </i>
          </Button>
        </Navbar.Text>
      </Navbar.Collapse>
    </Container>

  </Navbar>
  )
}

export default Header