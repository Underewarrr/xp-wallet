import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button, Card, Table } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import {
  FaArrowAltCircleRight, FaArrowAltCircleUp, FaArrowAltCircleLeft, FaArrowAltCircleDown,
} from 'react-icons/fa';
import Alert from 'react-bootstrap/Alert';
import Header from './Header';

function BuyStock() {
  const [userStocks, setUserStocks] = useState([]);
  const [cartStock, setCartStock] = useState([]);
  const [buyedStock, setBuyedStock] = useState([]);

  const [userBalance, setUserBalance] = useState(0);
  const [userQuantityToBuy, setUserQuantityToBuy] = useState(0);
  const [userPriceToBuy, setUserPriceToBuy] = useState(0);
  const [showAlertDanger, setShowAlertDanger] = useState(false);
  const [showAlertSuccess, setShowAlertSuccess] = useState(false);

  function userCloseAlert() {
    setShowAlertDanger(false);
    setShowAlertSuccess(false);
  }
  // Get userStocks from Local Storage
  useEffect(
    () => {
      const userStocks = JSON.parse(localStorage.getItem('userStocks'));
      if (userStocks && userStocks.length > 0) {
        setUserStocks(userStocks);
      }
    },
    [],
  );
  // Get userBalance from Local Storage
  useEffect(
    () => {
      const userBalance = JSON.parse(localStorage.getItem('userBalance'));
      if (userBalance) {
        setUserBalance(userBalance);
      }
    },
    [],
  );
  // Get buyedStock from Local Storage
  useEffect(
    () => {
      const buyedStock = JSON.parse(localStorage.getItem('buyedStock'));
      if (buyedStock) {
        setBuyedStock(buyedStock);
      }
    },
    [],
  );

  function handleUserInputQuantityToBuy(e) {
    const newUserStocks = [...userStocks];
    console.log('cartStock', cartStock);
    const index = userStocks.findIndex((stock) => stock.id === stock.id);
    const userQuantityToBuy = e.target.value;
    setCartStock(newUserStocks);
    setUserQuantityToBuy(userQuantityToBuy);
    const stockValue = userQuantityToBuy * userStocks[index].value;
    setUserPriceToBuy(stockValue);
  }
  function buyStock() {
    if (userBalance < userPriceToBuy) {
      setShowAlertDanger(true);
      setTimeout(
        () => {
          setShowAlertDanger(false);
        },
        3000,
      );
    } else {
      // buy stock update quantity in buyedStock
      const newBuyedStock = [...buyedStock];
      const index = userStocks.findIndex((stock) => stock.id === stock.id);
      const newUserBalance = userBalance - userPriceToBuy;
      const newUserQuantityToBuy = userQuantityToBuy + userStocks[index].quantity;
      const newUserStocksQuantity = userQuantityToBuy;
      const newUserStocksValue = userStocks[index].value * userQuantityToBuy;
      const newUserStocks = [...userStocks];
      newUserStocks[index].quantity = newUserStocksQuantity;
      newUserStocks[index].value = newUserStocksValue;
      newBuyedStock.push(userStocks[index]);
      setUserStocks(newUserStocks);
      setUserBalance(newUserBalance);
      setBuyedStock(newBuyedStock);
      setUserQuantityToBuy(0);
      setUserPriceToBuy(0);
      localStorage.setItem('userStocks', JSON.stringify(newUserStocks));
      localStorage.setItem('userBalance', JSON.stringify(newUserBalance));
      localStorage.setItem('buyedStock', JSON.stringify(newBuyedStock));
      setShowAlertSuccess(true);
      setTimeout(
        () => {
          setShowAlertSuccess(false);
        },
        3000,
      );
    }
  }

  return (
    <>
      <Header />
      <Card>
        <Card.Header>
          <Card.Title>
            <Alert
              show={showAlertSuccess}
              variant="success"
              onClose={userCloseAlert}
              dismissible
            >
              <Alert.Heading>Sucesso!</Alert.Heading>
              <p>
                Você comprou o ativo com sucesso!
              </p>
            </Alert>
            <Alert
              show={showAlertDanger}
              variant="danger"
              onClose={userCloseAlert}
              dismissible
            >
              <Alert.Heading>Erro!</Alert.Heading>
              <p>
                Você não tem saldo para comprar este ativo.
              </p>
            </Alert>

          </Card.Title>
          <Link
            style={{ color: 'black' }}
            to="/painel/"
          >
            <FaArrowAltCircleLeft />
          </Link>
          <h3>Comprar Ações</h3>
        </Card.Header>
        <Card.Body>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Quantidade</th>
                <th>Valor</th>
              </tr>
            </thead>
            <tbody>
              {userStocks.map((stock) => (
                <tr key={stock.id}>
                  <td>{stock.name}</td>
                  <td>{stock.quantity}</td>
                  <td>{stock.value.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </Table>
          Insira quantas ações deseja comprar:

          {userStocks.map((stock) => (
            <Card>
              <Card.Body>
                <Card.Title>{stock.name}</Card.Title>
                <Card.Text>
                  Quantidade:
                     {' '}
                  {userQuantityToBuy}
                </Card.Text>
                <Card.Text>
                  Valor:
                     {' '}
                  {userPriceToBuy.toFixed(2)}
                </Card.Text>
                <Form.Control type="number" placeholder="Quantidade" onChange={handleUserInputQuantityToBuy} />
                <center>
                  <Button

                       variant="outline-success"
                       onClick={buyStock}
                     >
                       Comprar
                       <FaArrowAltCircleUp
                         style={{ color: 'green' }}
                       />
                     </Button>
                </center>
              </Card.Body>
            </Card>
          ))}
        </Card.Body>
      </Card>

    </>

  );
}

export default BuyStock;
