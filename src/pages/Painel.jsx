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
            variant="outline-secondary" size="lg">
                Deposito/Retirada <FaArrowAltCircleRight />
            </Button>
    </div>
    </div>
    </>
  )
}

Painel.propTypes = {}

export default Painel
