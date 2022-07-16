import React from 'react'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Table from 'react-bootstrap/Table'

const ManageStock = props => {

    const [stockUserList, setStockUserList] = useState([]);
    
   
    const history = useHistory();


    useEffect(() => {
      const stockUserList = JSON.parse(localStorage.getItem('stockUserList'));
      if (stockUserList) {
        setStockUserList(stockUserList);
      }
    }, []);

    function renderStockUserList() {
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

        

   
    return (
    <div>
        {stockUserList.length > 0 ? (
            <div>
                <h1>Ação Selecionada</h1>
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
                    {renderStockUserList()}
                    </tbody>
                </Table>
            </div>
        ) : (
            <div>
                <h1>Nenhuma ação selecionada</h1>
            </div>
        )}
    </div>
    )}

ManageStock.propTypes = {}

export default ManageStock