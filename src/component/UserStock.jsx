import { React, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Table from 'react-bootstrap/Table'
import Accordion from 'react-bootstrap/Accordion'
import Button from 'react-bootstrap/Button'

const UserStock = props => {

    //useEffect to get from local storage
const [buyedStock, setBuyedStock] = useState([]);
const [showAlertSuccess, setshowAlertSuccess] = useState(false);


    useEffect(() => {
        const buyedStock = JSON.parse(localStorage.getItem('buyedStock'));
        if (buyedStock) {
          setBuyedStock(buyedStock);
        }
    }
        , []);




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
          {buyedStock.map(stock => (
            <tr key={stock.id}>
              <td>{stock.id}</td>
              <td>{stock.name}</td>
              <td>{stock.quantity}</td>
              <td>{stock.value}</td>
              <td>
                <Button variant="primary" 
               >
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