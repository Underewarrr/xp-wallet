import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Button, Card } from 'react-bootstrap'
import { Table } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
import { useState } from 'react';
import Header from './Header'
import { FaArrowAltCircleRight, FaArrowAltCircleUp } from 'react-icons/fa'
import Alert from 'react-bootstrap/Alert';
import { FaArrowAltCircleLeft, FaArrowAltCircleDown } from 'react-icons/fa';

const BuyStock = props => {
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
        useEffect(() => {
            const userStocks = JSON.parse(localStorage.getItem('userStocks'));
            if (userStocks && userStocks.length > 0) {
                setUserStocks(userStocks);
            }
        }
        , []);
            // Get userBalance from Local Storage
        useEffect(() => {
            const userBalance = JSON.parse(localStorage.getItem('userBalance'));
            if (userBalance) {
                setUserBalance(userBalance);
            }
        }
        , []);
            // Get buyedStock from Local Storage
        useEffect(() => {
            const buyedStock = JSON.parse(localStorage.getItem('buyedStock'));
            if (buyedStock) {
                setBuyedStock(buyedStock);
            }
        }
        , []);

        
        
        function handleUserInputQuantityToBuy(e) {
            const newUserStocks = [...userStocks];
            console.log('cartStock', cartStock);
            const index = userStocks.findIndex(stock => stock.id === stock.id);
            const userQuantityToBuy = e.target.value;
                    setCartStock(newUserStocks);
                    setUserQuantityToBuy(userQuantityToBuy);
            const stockValue = userQuantityToBuy * userStocks[index].value;
                setUserPriceToBuy(stockValue);
            }
        function buyStock () {   
            if (userBalance < userPriceToBuy) {
                setShowAlertDanger(true);
                    setTimeout(() => {
                        setShowAlertDanger(false);
                    }
                    , 3000);
            }
            // add value to buyedStock in Local Storage value
            else {
                setShowAlertSuccess(true);
                    setTimeout(() => {
                        setShowAlertSuccess(false);
                    }
                    , 3000);
                    
                const stock = {
                    id: cartStock[0].id,
                    name: cartStock[0].name,
                    quantity: userQuantityToBuy,
                    value: userPriceToBuy
                }
            const newBuyedStock = [...buyedStock, stock];
            console.log('buyedStock', buyedStock);
            setBuyedStock(newBuyedStock);
                localStorage.setItem('buyedStock', JSON.stringify(newBuyedStock));
                console.log('buyedStock', newBuyedStock);
                buyedStock.splice(0, 1);
                
            }
        }

    function renderCart () {
        return (
            <div>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Quantidade Total</th>
                            <th>Valor Total </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{userQuantityToBuy}</td>
                            <td>{userPriceToBuy.toFixed(2)}
                            </td>
                        </tr>
                    </tbody>
                </Table>
                
            </div>
                
        )
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
            dismissible>
                <Alert.Heading>Sucesso!</Alert.Heading>
                <p>
                    Você comprou o ativo com sucesso!
                </p>
            </Alert>
                <Alert
            show={showAlertDanger}
            variant="danger"
            onClose={userCloseAlert}
            dismissible>
                <Alert.Heading>Erro!</Alert.Heading>
                <p>
                   Você não tem saldo para comprar este ativo.
                </p>
            </Alert>

                </Card.Title>
                <Link 
                style={ { color: 'black' } }
                to="/painel/">
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
                        {userStocks.map(stock => (
                            <tr key={stock.id}>
                                <td>{stock.name}</td>
                                <td>{stock.quantity}</td>
                                <td>{stock.value.toFixed(2)}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
                {userQuantityToBuy > 0 ? renderCart() : null}
                  Insert how many stocks you want to buy
                  {
                        cartStock.map(stock => (
                            <Form.Group id='input'>
                                <Form.Label>{stock.name}</Form.Label>
                            </Form.Group>
                        ))
                    }
                    
                    <Form.Control 
                    id='input'
                    onChange={handleUserInputQuantityToBuy}
                    type="number" placeholder="Quantidade" />
                   <Button
                     onClick={buyStock} 
                    variant="primary"
                    type="submit">
                    Comprar
                </Button>


               
            </Card.Body>
        </Card>





       </>
    

    )
}

export default BuyStock