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
import { FaArrowAltCircleLeft, FaArrowAltCircleDown, FaMoneyBillAlt } from 'react-icons/fa';


const BuyStock = props => {
    const [userStocks, setUserStocks] = useState([]);
    const [userBalance, setUserBalance] = useState(0);  
    const [userQuantityToBuy, setUserQuantityToBuy] = useState(0);
    const [userPriceToBuy, setUserPriceToBuy] = useState(0);

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

        
        function handleUserInputQuantityToBuy(e) {
           
            const newUserStocks = [...userStocks];
            const index = userStocks.findIndex(stock => stock.id === stock.id);
            // Update Quantity to buy
            const userQuantityToBuy = e.target.value;
                newUserStocks[index].quantity = userQuantityToBuy;
                    setUserStocks(newUserStocks);
                    setUserQuantityToBuy(userQuantityToBuy);
                        console.log('userQuantityToBuy', userQuantityToBuy);
                    // Update Price to buy
            const stockValue = userQuantityToBuy * userStocks[index].value;
                setUserPriceToBuy(stockValue);
                    console.log(userBalance)
            
        }


        function buttonHandleBuy(e) {
           

            const { name, value } = e.target;
            const index = userStocks.findIndex(stock => stock.id === stock.id);
            const newUserStocks = [...userStocks];
            console.log(userStocks[index].value);
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
                        userStocks.map(stock => (
                            <Form.Group id='input'>
                                <Form.Label>{stock.name}</Form.Label>
                                <Form.Control 
                                id='input'
                                onChange={handleUserInputQuantityToBuy}
                                type="number" placeholder="Quantidade" />
                            </Form.Group>
                        ))
                  }
                   <Button
                    onClick={buttonHandleBuy}
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