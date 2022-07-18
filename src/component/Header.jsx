import { React, useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


const Header = () => {

// get from localStorage and set to userEmail
const [userEmail, setUserEmail] = useState('');
const [userBalance, setUserBalance] = useState(0);
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

  return (
    <Navbar>
    <Container>
      <Navbar.Brand href="">
      <img
              alt=""
              src="https://logospng.org/download/xp-investimentos/logo-xp-investimentos-icon-1536.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            /> Investimentos
        <code><p>Saldo R$ {userBalance.toFixed(2)}</p></code>
          
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
          Logado com a conta: <a href="#login">{userEmail}</a>
        </Navbar.Text>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Header