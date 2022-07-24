import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Table from 'react-bootstrap/Table';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import { FaArrowAltCircleDown, FaArrowAltCircleRight, FaArrowAltCircleUp } from 'react-icons/fa';

function MarketStock(props) {
  const AvaliableStock = [
    {
      id: 1,
      name: 'Apple',
      quantity: 100000,
      value: 350.00,
      buy: 'comprar',
      sell: 'vender',
    },
    {
      id: 2,
      name: 'Google',
      quantity: 100000,
      value: 350.00,
      buy: 'comprar',
      sell: 'vender',
    },
    {
      id: 3,
      name: 'Facebook',
      quantity: 100000,
      value: 350.00,
      buy: 'comprar',
      sell: 'vender',
    },
    {
      id: 4,
      name: 'Twitter',
      quantity: 100000,
      value: 350.00,
      buy: 'comprar',
      sell: 'vender',
    },
    {
      id: 5,
      name: 'Amazon',
      quantity: 100000,
      value: 350.00,
      buy: 'comprar',
      sell: 'vender',
    },
    {
      id: 6,
      name: 'Microsoft',
      quantity: 100000,
      value: 350.00,
      buy: 'comprar',
      sell: 'vender',
    },
    {
      id: 7,
      name: 'Alibaba',
      quantity: 100000,
      value: 350.00,
      buy: 'comprar',
      sell: 'vender',
    },
    {
      id: 8,
      name: 'Intel',
      quantity: 100000,
      value: 350.00,
      buy: 'comprar',
      sell: 'vender',
    },
    {
      id: 9,
      name: 'Nvidia',
      quantity: 100000,
      value: 350.00,
      buy: 'comprar',
      sell: 'vender',
    },

  ];
  const [stocks, setStocks] = useState(AvaliableStock);

  const [userStocks, setUserStocks] = useState([]);

  const handleBuy = (stock) => {
    // Save in userStocks And Local Storage
    const newUserStocks = [...userStocks, stock];
    setUserStocks(newUserStocks);
    localStorage.setItem('userStocks', JSON.stringify(newUserStocks));
    // Remove from stocks
    const newStocks = stocks.filter((s) => s.id !== stock.id);
    setStocks(newStocks);
  };
  const handleSell = (stock) => {
    const newUserStocks = [...userStocks, stock];
    setUserStocks(newUserStocks);
    // Remove from stocks
    const newStocks = stocks.filter((s) => s.id !== stock.id);
    setStocks(newStocks);
    localStorage.setItem('userStocks', JSON.stringify(newUserStocks));
  };

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
                <th
                  className="btn-group-main"
                >
                  Negociar
                </th>
              </tr>
            </thead>
            <tbody>
              {stocks.map((stock) => (
                <tr key={stock.id}>
                  <td>{stock.id}</td>
                  <td>{stock.name}</td>
                  <td>{stock.quantity}</td>
                  <td>{stock.value}</td>
                  <td>
                    <div className="btn-group">
                      <Button
                        variant="outline-success"
                      >
                        <FaArrowAltCircleUp />
                        <Link
                          onClick={() => handleBuy(stock)}
                          style={{ color: 'darkgrey' }}
                          to={`/painel/investimentos/comprar/${stock.id}`}
                        >
                          {stock.buy}
                        </Link>
                      </Button>

                      {' '}
                      <Button
                        variant="outline-danger"
                      >
                        <FaArrowAltCircleDown />
                        <Link
                          onClick={() => handleSell(stock)}
                          style={{ color: 'darkgrey' }}
                          to={`/painel/investimentos/vender/${stock.id}`}
                        >

                          {stock.sell}

                        </Link>
                      </Button>
                    </div>
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

MarketStock.propTypes = {};

export default MarketStock;
