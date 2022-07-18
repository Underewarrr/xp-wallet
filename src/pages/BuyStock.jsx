import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import { Table } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
import { useState } from 'react';
import Header from '../component/Header'


const BuyStock = props => {
    const [newUserStocks, setNewUserStocks] = useState([]);
    const [userStocks, setUserStocks] = useState([]);
    
    useEffect(() => {
        const userStocks = JSON.parse(localStorage.getItem('userStocks'));
        if (userStocks) {
            setUserStocks(userStocks);
        }
    }
        , []);
    useEffect(() => {
        const stock = JSON.parse(localStorage.getItem('newUserStocks'));
        if (stock) {
            setNewUserStocks(stock);
        }
    }
        , []);

        const handleBuy = (stock) => {
            // Save in userStocks And Local Storage
            const newUserStocks = [...userStocks, stock];
            setUserStocks(newUserStocks);
            localStorage.setItem('newUserStocks', JSON.stringify(newUserStocks));
            console.log(newUserStocks);
            // Remove from stocks
            const newStocks = userStocks.filter(s => s.id !== stock.id);
            setNewUserStocks(newStocks);
            console.log(newStocks);
        } 
        


    return (
        <div>
            <Header />
            Ação do usuário:
            <Table striped bordered hover variant="light">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nome</th>
                        <th>Quantidade</th>
                        <th>Valor</th>
                        <th>Negociar</th>
                    </tr>
                </thead>
                <tbody>
                    {newUserStocks.map(stock => (
                        <tr key={stock.id}>
                            <td>{stock.id}</td>
                            <td>{stock.name}</td>
                            <td>{stock.quantity}</td>
                            <td>{stock.value}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <br />

            Comprar Ação:
            <Table striped bordered hover variant="light">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nome</th>
                        <th>Quantidade</th>
                        <th>Valor</th>
                        <th>Negociar</th>
                    </tr>
                </thead>
                <tbody>
                    {userStocks.map(stock => (
                        <tr key={stock.id}>
                            <td>{stock.id}</td>
                            <td>{stock.name}</td>
                            <td>{stock.quantity}</td>
                            <td>{stock.value}</td>
                            <td>
                                <Button

                                    onClick={handleBuy}
                                    variant="secondary"
                                    />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <br />
            <br />
            <br />

            <Link to="/painel">
                <Button variant="secondary">Voltar</Button>
            </Link>
        </div>
    )
}


export default BuyStock
                                        
