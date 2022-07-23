import { React, useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { FaMoneyBillAlt } from 'react-icons/fa';
import Button from 'react-bootstrap/Button';
import { FaArrowAltCircleLeft, FaUserCircle } from 'react-icons/fa';
import { BiLogOutCircle } from 'react-icons/bi';
import './styles/Header.css';

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

function pushToLogout () {
    localStorage.removeItem('userEmail');
    localStorage.removeItem('userBalance');
    localStorage.removeItem('userStocks');
    window.location.href = '/';
}
  return (
    <Navbar>
    <Container>
      <Navbar.Brand href="">
               
      <img
              onClick={
                () => {
                  window.location.href = '/painel';
                }
              }
              style={{ cursor: 'pointer' }}
              alt=""
              src="https://logospng.org/download/xp-investimentos/logo-xp-investimentos-icon-1536.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            /> Investimentos
              
                                           
        <code><p>
          <FaMoneyBillAlt 
          onClick={
            () => {
              window.location.href = '/painel/investimentos/saldo';
            }
          }
          style={{ color: 'black', cursor: 'pointer' }}
          />
           {' '}Saldo R$ {userBalance.toFixed(2)}</p></code>
          
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
          <FaUserCircle 
          onClick={
            () => {
              window.location.href = '/painel/perfil';
            }
          }
          style={{ color: 'black', cursor: 'pointer' }}
          /> <p
          className='text-muted'
          id='userEmail'
          >{userEmail}</p>
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