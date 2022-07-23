import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Header from './Header';
import { Card,Table, Button } from 'react-bootstrap';


const SellStock = props => {
    const [buyedStock, setBuyedStock] = useState([]);
    const [userBalance, setUserBalance] = useState(0);  
    const [cartStock, setCartStock] = useState([]);
    const [userQuantityToSell, setUserQuantityToSell] = useState(0);
    const [userPriceToSell, setUserPriceToSell] = useState(0);
    const [showAlertDanger, setShowAlertDanger] = useState(false);
    const [showAlertSuccess, setShowAlertSuccess] = useState(false);
    
    function userCloseAlert() {
        setShowAlertDanger(false);
        setShowAlertSuccess(false);
    }
    // Get buyedStock from Local Storage
    useEffect(() => {
        const buyedStock = JSON.parse(localStorage.getItem('buyedStock'));
        if (buyedStock) {
            setBuyedStock(buyedStock);
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

    function handleUserInputQuantityToSell(e) {
        const newUserStocks = [...buyedStock];
        const index = buyedStock.findIndex(stock => stock.id === stock.id);
        const userPriceToSell = e.target.value;
        setCartStock(newUserStocks);
        setUserQuantityToSell(userPriceToSell);
        const stockValue = userPriceToSell * buyedStock[index].value;
        setUserPriceToSell(stockValue);
        console.log('cartStock', cartStock);
        }
    function handleSell() {
        const newUserStocks = [...buyedStock];
        const index = buyedStock.findIndex(stock => stock.id === stock.id);
        const userQuantityToSell = buyedStock[index].quantity;
        const userPriceToSell = buyedStock[index].value;
        const stockValue = userPriceToSell * userQuantityToSell;
        const newUserBalance = userBalance + stockValue;
        localStorage.setItem('userBalance', newUserBalance);
        localStorage.setItem('buyedStock', JSON.stringify([
            ...buyedStock.slice(0, index),

        ]));
        setUserBalance(newUserBalance);
        setUserQuantityToSell(userQuantityToSell);
        setUserPriceToSell(userPriceToSell);
        setCartStock(newUserStocks);
        setShowAlertSuccess(true);
        setShowAlertDanger(false);
    }

    
  return (
    <>
    <Header />
    <Card>
        <Card.Header>
            {buyedStock.length > 0 ?  <Card.Title>Venda suas ações</Card.Title>: <h3>Você não tem ações para vender</h3>}
            {buyedStock.length > 0 ?  <Card.Text>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Quantidade</th>
                            <th>Preço</th>
                        </tr>
                    </thead>
                    <tbody>
                        {buyedStock.map(stock => (
                            <tr key={stock.id}>
                                <td>{stock.name}</td>
                                <td>{stock.quantity}</td>
                                <td>{stock.value}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Card.Text>: <></>}
        </Card.Header>
        <Card.Body>
            {buyedStock.length > 0 ?  <Card.Text>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Quantidade Total</th>
                            <th>Valor Total </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
       {buyedStock.reduce((acc, curr) => acc + curr.quantity, 0)}
                            </td>
                            <td>{buyedStock.reduce((acc, stock) => acc + stock.value, 0)}</td>
                        </tr>

                    </tbody>
                </Table>
            </Card.Text>: <></>}
        </Card.Body>
        <Card.Footer>
            {buyedStock.length > 0 ?  <Card.Text>
                <Button variant="primary" onClick={() => handleSell()}>Vender
                </Button>
    <input type="number" placeholder="Quantidade" onChange={handleUserInputQuantityToSell} />
            </Card.Text>: <></>}
        </Card.Footer>
    </Card>
    <div className="alert alert-success" role="alert" style={{ display: showAlertSuccess ? 'block' : 'none' }}>
        Ações vendidas com sucesso!
        <button type="button" className="close" onClick={userCloseAlert}>

        </button>
    </div>
    <div className="alert alert-danger" role="alert" style={{ display: showAlertDanger ? 'block' : 'none' }}>
        Erro ao vender ações!
        <button type="button" className="close" onClick={userCloseAlert}>
            
        </button>
    </div>
    </>
    )
}
SellStock.propTypes = {
}

export default SellStock;
