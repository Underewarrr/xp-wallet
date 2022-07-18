import { React, useState} from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Table from 'react-bootstrap/Table'
import Accordion from 'react-bootstrap/Accordion'
import Button from 'react-bootstrap/Button'

const MarketStock = props => {
const AvaliableStock = 
[
    {
        id: 1,
        name: 'Apple',
        quantity: 10,
        value: 10.00,
        sell: 'vender',
        buy: 'comprar'
    },
    {
        id: 2,
        name: 'Google',
        quantity: 10,
        value: 10.00,
        sell: 'vender',
        buy: 'comprar'
    },
    {
        id: 3,
        name: 'Facebook',
        quantity: 10,
        value: 10.00,
        sell: 'vender',
        buy: 'comprar'
    }
];
    const [stocks, setStocks] = useState(AvaliableStock);

    const [userStocks, setUserStocks] = useState([]);
    const [newUserStocks, setNewUserStocks] = useState([]);

    const handleBuy = (stock) => {
        // Save in userStocks And Local Storage
        const newUserStocks = [...userStocks, stock];
        setUserStocks(newUserStocks);
        localStorage.setItem('userStocks', JSON.stringify(newUserStocks));
        console.log(newUserStocks);
        // Remove from stocks
        const newStocks = stocks.filter(s => s.id !== stock.id);
        setStocks(newStocks);
        console.log(newStocks);
    }

  return (
    <Accordion>
    <Accordion.Item eventKey="0">
      <Accordion.Header>Mercado de Ações</Accordion.Header>
      <Accordion.Body>
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
       {stocks.map(stock => (
        <tr key={stock.id}>
            <td>{stock.id}</td>
            <td>{stock.name}</td>
            <td>{stock.quantity}</td>
            <td>{stock.value}</td>
            <td>
                <Button
                onClick={() => handleBuy(stock)}
                variant="secondary"
                >
                    <Link to={`/painel/investimentos/comprar/${stock.id}`}>
                {stock.buy}
            </Link></Button>
                    
                {' '}
                <Button
                variant="secondary"
                ><Link to={`/painel/investimentos/vender/${stock.id}`}>
                {stock.sell}
            </Link></Button>
               
            </td>
        </tr>
        ))}
      </tbody>
    </Table>
      </Accordion.Body>
    </Accordion.Item>
  </Accordion>
  )
}

MarketStock.propTypes = {}

export default MarketStock