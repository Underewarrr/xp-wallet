<<<<<<< Updated upstream
import { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Accordion from 'react-bootstrap/Accordion';
import Table from 'react-bootstrap/Table';

export default function Painel() {

const stockMarket = [
    {
        id: 1,
        name: 'Apple',
        price: '$1,00',
        volume: '1.000.000',
        buy: 'comprar',
        sell: 'vender',
    },
    {
        id: 2,
        name: 'Google',
        price: '$1,00',
        volume: '1.000.000',
        buy: 'comprar',
        sell: 'vender',
    },
    {
        id: 3,
        name: 'Facebook',
        price: '$1,00',
        volume: '1.000.000',
        buy: 'comprar',
        sell: 'vender',
    },
    {
        id: 4,
        name: 'Microsoft',
        price: '$1,00',
        volume: '1.000.000',
        buy: 'comprar',
        sell: 'vender',
    },
    {
        id: 5,
        name: 'Amazon',
        price: '$1,00',
        volume: '1.000.000',
        buy: 'comprar',
        sell: 'vender',
    }
    

];

    const [stockMarketList, setStockMarketList] = useState(stockMarket);
    const [stockUserList, setStockUserList] = useState([]);
    const history = useHistory();

    
    useEffect(() => {
        const stockUserList = JSON.parse(localStorage.getItem('stockUserList'));
        if (stockUserList) {
          setStockUserList(stockUserList);
        }
      }, []);
    function renderStockUserListLocal() {
        console.log('stockUserList', stockUserList);
        return stockUserList.map(stockUser => (
            <tr key={stockUser.id}>
                <td>{stockUser.name}</td>
                <td>{stockUser.price}</td>
                <td>{stockUser.volume}</td>
                <td>{stockUser.buy}</td>
                <td>{stockUser.sell}</td>
            </tr>
        ))
    }

    function buyStock(stockMarket) {
        if (stockUserList.length === 0) {
            setStockUserList([...stockUserList, stockMarket]);
            console.log('if', stockUserList);
           
            localStorage.setItem('stockUserList', JSON.stringify([...stockUserList, stockMarket]));

        }
        else {
            const stockUserListNew = [...stockUserList];
            const stockUserListNewIndex = stockUserListNew.findIndex(stockUser => stockUser.id === stockMarket.id);
            if (stockUserListNewIndex === -1) {
                setStockUserList([...stockUserListNew, stockMarket]);
                console.log('if from else', stockUserList);
                localStorage.setItem('stockUserList', JSON.stringify([...stockUserList, stockMarket]));
                
            }
            else {
                stockUserListNew[stockUserListNewIndex].volume = parseInt(stockUserListNew[stockUserListNewIndex].volume) + parseInt(stockMarket.volume);
                setStockUserList(stockUserListNew);
                console.log('else from else', stockUserList);
            }
        }
    }
    function sellStock(stockMarket) {
        const stockUserListNew = [...stockUserList];
        const stockUserListNewIndex = stockUserListNew.findIndex(stockUser => stockUser.id === stockMarket.id);
        if (stockUserListNewIndex === -1) {
            setStockUserList([...stockUserListNew, stockMarket]);
        }
        else {
            stockUserListNew[stockUserListNewIndex].volume = parseInt(stockUserListNew[stockUserListNewIndex].volume) - parseInt(stockMarket.volume);
            setStockUserList(stockUserListNew);
        }
    }

    return (
        <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Minhas ações</Accordion.Header>
          <Accordion.Body>
          <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Nome</th>
          <th>Quantidade</th>
          <th>Valor</th>
        </tr>
      </thead>
      <tbody>
        {renderStockUserListLocal()}

      </tbody>
    </Table>

          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Ações do mercado</Accordion.Header>
          <Accordion.Body>
            <Table striped bordered hover>
        <thead>
            <tr>
                <th>#</th>
                <th>Nome</th>
                <th>Quantidade</th>
                <th>Valor</th>
                <th>Comprar</th>
                <th>Vender</th>
            </tr>
        </thead>
        <tbody>
            {stockMarketList.map(stock => (
                <tr key={stock.id}>
                    <td>{stock.id}</td>
                    <td>{stock.name}</td>
                    <td>{stock.volume}</td>
                    <td>{stock.price}</td>
                    <td>
                        <Button onClick={buyStock}>
                            
                            <Link to={`/painel/investimentos/comprar/${stock.id}${stock.volume}`} >Comprar</Link>
                            
                            </Button>
                    </td>
                    <td>
                        <Button onClick={() => sellStock(stock)}>Vender</Button>
                    </td>
                </tr>
            ))}
        </tbody>
    </Table>

          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    );
}
// 
=======
import React from 'react'
import PropTypes from 'prop-types'
import Button from 'react-bootstrap/Button'
import UserStock from '../component/UserStock'
import MarketStock from '../component/MarketStock'
import Header from '../component/Header'

import { FaArrowAltCircleRight, FaArrowAltCircleDown } from 'react-icons/fa'

const Painel = props => {

const pushToLogout = () => {
        props.history.push('/')
    }


    const pushToDeposit = () => {
        props.history.push('/painel/investimentos/saldo');
    }

  return (
    <>
    <Header />
    <div className="container">
        <div className="row">
            <div className="col-md-12">
                <div className="card">
                    <div className="card-header">
                        <h4>Painel de investimentos</h4>
                        {/* Profile Icon  */}
                        <Button 
                        onClick={pushToLogout}
                        className="card-header-icon">

                            Logout <FaArrowAltCircleDown /> 
                        </Button>


                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-12">
                            <UserStock />
                            </div>
                        </div>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-12">
                            <MarketStock />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="d-grid gap-2">
            <Button 
            onClick={pushToDeposit}
            variant="secondary" size="lg">
                Deposito/Retirada <FaArrowAltCircleRight />
            </Button>
    </div>
    </div>
    </>
  )
}

Painel.propTypes = {}

export default Painel
>>>>>>> Stashed changes
