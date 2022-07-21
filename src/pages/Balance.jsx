import { React, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert';

import { FaArrowAltCircleLeft, FaArrowAltCircleDown } from 'react-icons/fa'
import { FaTrashAlt, FaMoneyBill, FaBroom } from 'react-icons/fa';
import Header from '../component/Header';
import Link from 'react-router-dom/Link';

const Balance = props => {

    const [showAlertSuccess, setshowAlertSuccess] = useState(false);
    const [showAlertDanger, setshowAlertDanger] = useState(false);
    const [showAlertWarning, setshowAlertWarning] = useState(false);
    const [showCleanBalance, setshowCleanBalance] = useState(false);
    const [showNoBalance, setshowAlertNoBalance] = useState(false);
        
    const [userBalance, setUserBalance] = useState(0);

    
    function userAddBalance(value) {
        if (value > 0) {
            setUserBalance(userBalance + value);
            setshowAlertSuccess(true);
            setTimeout(() => {
                setshowAlertSuccess(false);
            }, 3000);
        }
        else if (value < userBalance) {
            setshowAlertNoBalance(true);
            setTimeout(() => {
            setshowAlertNoBalance(false);
        }, 3000);
        }
        else {
            setshowAlertWarning(true);
            setTimeout(() => {
                setshowAlertWarning(false);
            }, 3000);
        }

    }
    function userRemoveBalance(value) {
        if (value <= userBalance) {
            setUserBalance(userBalance - value);
            setshowAlertDanger(true);
            setTimeout(() => {
                setshowAlertDanger(false);
            }, 3000);
        }
        else {
            setshowAlertWarning(true);
            setTimeout(() => {
                setshowAlertWarning(false);
            }, 3000);
        }
    }
    function userClearBalance() {
        if (userBalance > 0) {
            setUserBalance(0);
            setshowCleanBalance(true);
            setTimeout(() => {
                setshowCleanBalance(false);
            }, 3000);
        }
        else {
            setshowAlertNoBalance(true);
            setTimeout(() => {
                setshowAlertNoBalance(false);
            }, 3000);
        }
    }
    function userCloseAlert() {
        setshowAlertSuccess(false);
        setshowAlertDanger(false);
        setshowAlertWarning(false);
        setshowCleanBalance(false);
        setshowAlertNoBalance(false);
    }
    useEffect(() => {
        const userBalance = JSON.parse(localStorage.getItem('userBalance'));
        if (userBalance) {
            setUserBalance(userBalance);
        }
    }, []);
    useEffect(() => {
        localStorage.setItem('userBalance', JSON.stringify(userBalance));
    }
        , [userBalance]);
    return (
        <div className="container">
        <div className="row">
            <div className="col-md-12">
                <div className="card">
                    <div className="card-header">
                        <Header />
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="card">
                                    <div className="card-header">
                                        <div className="d-grid gap-2">
            <Alert
            show={showAlertSuccess}
            variant="success"
            onClose={userCloseAlert}
            dismissible>
                <Alert.Heading>Sucesso!</Alert.Heading>
                <p>
                    Você adicionou dinheiro ao seu saldo.
                </p>
            </Alert>
            <Alert
            show={showCleanBalance}
            variant="success"
            onClose={userCloseAlert}
            dismissible>
                <Alert.Heading>Sucesso!</Alert.Heading>
                <p>
                    Você limpou o seu saldo.
                </p>
            </Alert>
            <Alert
            show={showAlertWarning}
            variant="secondary"
            onClose={userCloseAlert}
            dismissible>
                <Alert.Heading>Erro!</Alert.Heading>
                <p>
                    Insira uma quantia valida!
                </p>
            </Alert>
            <Alert
            show={showAlertDanger}
            variant="success"
            onClose={userCloseAlert}
            dismissible>
                <Alert.Heading>Sucess!</Alert.Heading>
                <p>
                    Você removeu dinheiro do seu saldo.
                </p>
            </Alert>
            <Alert
            show={showNoBalance}
            variant="danger"
            onClose={userCloseAlert}
            dismissible>
                <Alert.Heading>Erro!</Alert.Heading>
                <p>
                    Você não tem saldo para remover.
                </p>
            </Alert>
        </div> <Link 
                style={ { color: 'black' } }
                to="/painel/">
                    <FaArrowAltCircleLeft />
                </Link>
                                        <h3
                                        className="text-muted"
                                        >Saldo : <em>R$ {userBalance.toFixed(2)}</em></h3>
                                    </div>
                                    <div className="card-body">
                                    <div className="d-grid gap-2">
            <input type="number" className="form-control" placeholder="Valor" />
            <Button
            onClick={() => userAddBalance(parseInt(document.getElementsByTagName('input')[0].value))}
            variant="outline-secondary" size="lg">
                Adicionar <FaMoneyBill />
            </Button>
            <Button
            onClick={() => userRemoveBalance(parseInt(document.getElementsByTagName('input')[0].value))}
            variant="outline-secondary" size="lg">
                Remover <FaTrashAlt />
            </Button>
            <Button
            onClick={userClearBalance}
            variant="outline-secondary" size="lg">
                Limpar <FaBroom />
            </Button>
        </div>
        
                                    </div>
                                </div>
                             </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        </div>
    )
}
Balance.propTypes = {}
export default Balance;
// Language: javascript
// Path: src/pages/Balance.jsx
// Compare this snippet from src/pages/Painel.jsx:
// import React from 'react'
// import PropTypes from 'prop-types'
// import Button from 'react-bootstrap/Button'
// import UserStock from '../component/UserStock'
// import MarketStock from '../component/MarketStock'
//