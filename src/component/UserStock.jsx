import { React, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Table from 'react-bootstrap/Table'
import Accordion from 'react-bootstrap/Accordion'
import Button from 'react-bootstrap/Button'

const UserStock = props => {

    //useEffect to get from local storage
const [newUserStocks, setNewUserStocks] = useState([]);
const [userStocks, setUserStocks] = useState([]);

    useEffect(() => {
        const userStocks = JSON.parse(localStorage.getItem('userStocks'));
        if (userStocks) {
            setNewUserStocks(userStocks);
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
    useEffect(() => {
        const stocks = JSON.parse(localStorage.getItem('stocks'));
        if (stocks) {
            setNewUserStocks(stocks);
        }
    }
        , []);
    useEffect(() => {
        const newUserStocks = JSON.parse(localStorage.getItem('newUserStocks'));
        if (newUserStocks) {
            setNewUserStocks(newUserStocks);
        }
    }
        , []);
    const handleRemoveUserStocks = (userStocks) => {
        const newUserStocks = [...userStocks, setNewUserStocks];
        setUserStocks(newUserStocks);
        localStorage.setItem('newUserStocks', JSON.stringify(newUserStocks));
        console.log(newUserStocks);
        // Remove from stocks
        const newStocks = newUserStocks.filter(s => s.id !== userStocks.id);
        setNewUserStocks(newStocks);
        setNewUserStocks(newUserStocks);
        console.log(newStocks);
        
    }



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
              <td>
                <Button variant="primary" 
                onClick={handleRemoveUserStocks}>
                  Deletar
                </Button>
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

UserStock.propTypes = {}

export default UserStock