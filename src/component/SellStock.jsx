import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button, Card, Table } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import {
  FaArrowAltCircleRight, FaArrowAltCircleUp, FaRegArrowAltCircleDown, FaArrowAltCircleLeft, FaArrowAltCircleDown,
} from 'react-icons/fa';
import Alert from 'react-bootstrap/Alert';
import Header from './Header';

function SellStock(props) {
  const [userStocks, setUserStocks] = useState([]);
  const [buyedStock, setBuyedStock] = useState([]);
  const [userBalance, setUserBalance] = useState(0);
  const [cartStock, setCartStock] = useState([]);
  const totalValue = buyedStock.reduce((acc, stock) => acc + stock.value, 0);
  const [userQuantityToSell, setUserQuantityToSell] = useState(buyedStock.reduce((acc, stock) => acc + stock.value, 0));
  const [userPriceToSell, setUserPriceToSell] = useState(0);
  const [showAlertDanger, setShowAlertDanger] = useState(false);
  const [showAlertSuccess, setShowAlertSuccess] = useState(false);

  function userCloseAlert() {
    setShowAlertDanger(false);
    setShowAlertSuccess(false);
  }
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
  useEffect(
    () => {
      const userStock = JSON.parse(localStorage.getItem('userStocks'));
      if (userStock) {
        setUserStocks(userStock);
      }
    },
    [],
  );

  function handleUserInputQuantityToSell(e) {
    const newUserStocks = [...userStocks];
    const index = userStocks.findIndex((stock) => stock.id === stock.id);
    const userPriceToSell = e.target.value;
    setCartStock(newUserStocks);
    setUserQuantityToSell(userPriceToSell);
    const stockValue = userPriceToSell * userStocks[index].value;
    setUserPriceToSell(stockValue);
    console.log('cartStock', cartStock);
  }
  function handleSell() {
    const stockQuantity = userQuantityToSell;
    const buyedStockQuantity = buyedStock.reduce((acc, stock) => acc + stock.quantity);
    if (buyedStockQuantity.quantity < stockQuantity) {
      setShowAlertDanger(true);
      console.log('Quantidade de ações que você deseja vender é maior que a quantidade de ações que você possui');
    } else {
      console.log(`${userQuantityToSell}Quantidade de ações que você deseja vender`);
      console.log(buyedStockQuantity.quantity);
      // remove 1 quantity from buyedStock with same id as userStock
      const newBuyedStock = buyedStock.map((stock) => {
        if (stock.id === stock.id) {
          stock.quantity -= stockQuantity;
          stock.value -= userPriceToSell;
        }
        return stock;
      });
      setBuyedStock(newBuyedStock);
      localStorage.setItem('buyedStock', JSON.stringify(newBuyedStock));
      // remove balance from userBalance
      const newUserBalance = userBalance + userPriceToSell;
      setUserBalance(newUserBalance);
      localStorage.setItem('userBalance', JSON.stringify(newUserBalance));
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
                Você vendeu o ativo com sucesso!
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
                Você não tem ativos suficientes para vender!
              </p>
            </Alert>

          </Card.Title>
          <Link
            style={{ color: 'black' }}
            to="/painel/"
          >
            <FaArrowAltCircleLeft />
          </Link>
          <h3>Vender Ações</h3>
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

              {buyedStock.length === 0
                ? (
                  <tr>
                    <td colSpan="3">
                        <Alert variant="warning">
                            Você não possui ações para vender!
                          </Alert>
                      </td>
                  </tr>
                )
                // eslint-disable-next-line operator-linebreak
                :
              // show only buyedStock with id equal to userStocks
                buyedStock.filter((stock) => stock.quantity > 0).map((stock) => {
                  if (stock.id === userStocks[0].id) {
                    return (
                      <tr key={stock.id}>
                        <td>{stock.name}</td>
                        <td>{stock.quantity}</td>
                        <td>{stock.value}</td>
                      </tr>
                    );
                  }
                })}
            </tbody>
          </Table>
          Insira quantas ações deseja vender:

          {userStocks.map((stock) => (
            <Card>
              <Card.Body>
                <Card.Title>{stock.name}</Card.Title>
                <Card.Text>
                  Quantidade:
                      {' '}
                  {userQuantityToSell}
                </Card.Text>
                <Card.Text>
                  Valor:
                      {' '}
                  {userPriceToSell.toFixed(2)}
                </Card.Text>
                <Form.Control type="number" placeholder="Quantidade" onChange={handleUserInputQuantityToSell} />
                <center>
                  <Button

                        variant="outline-danger"
                        onClick={handleSell}
                      >
                        Vender
                        <FaRegArrowAltCircleDown
                          style={{ color: 'red' }}
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

export default SellStock;
