import { React, useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Accordion from 'react-bootstrap/Accordion';

function UserStock() {
  // useEffect to get from local storage
  const [buyedStock, setBuyedStock] = useState([]);
  useEffect(
    () => {
      const buyedStock = JSON.parse(localStorage.getItem('buyedStock'));
      if (buyedStock) {
        setBuyedStock(buyedStock);
      }
    },
    [],
  );

  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Minhas ações pessoais</Accordion.Header>
        <Accordion.Body>
          <Table striped bordered hover variant="light">
            <thead>
              <tr>
                <th>#</th>
                <th>Nome</th>
                <th>Quantidade</th>
                <th>Valor</th>
              </tr>
            </thead>
            <tbody>
              {buyedStock.filter((stock) => stock.quantity > 0).map((stock) => (
                <tr key={stock.id}>
                  <td>{stock.id}</td>
                  <td>{stock.name}</td>
                  <td>{stock.quantity}</td>
                  <td>{stock.value}</td>
                </tr>

              ))}
            </tbody>
          </Table>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>

  );
}

UserStock.propTypes = {};

export default UserStock;
