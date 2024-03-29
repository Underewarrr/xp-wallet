import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';

import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function Login(props) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userToken, setUserToken] = useState('');
  
    const buttonDisabled = () => {
        const minPasswordLength = 6;   
        const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return !emailRegex.test(email) || password.length < minPasswordLength;
    }

    const generateToken = () => {
        const token = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        setUserToken(token);
        localStorage.setItem('userToken', token);
      }


    const handleLogin = (e) => {
    e.preventDefault();
    const { history } = props;
    history.push('/painel');
    localStorage.setItem('userEmail', email);
    }
    return (
        <Form>
        <Form.Group 
            className="mb-3" 
            controlId="formBasicEmail">
          <Form.Label>
            Email
          </Form.Label>
          <Form.Control 
            onChange={ (e) => setEmail(e.target.value) }
            type="email" 
            placeholder="E-mail" />
          <Form.Text 
            className="text-muted">
                Nunca compartilhe suas credenciais!
          </Form.Text>
        </Form.Group>
  
        <Form.Group 
            className="mb-3" 
            controlId="formBasicPassword">
          <Form.Label>
            Senha
          </Form.Label>
          <Form.Control 
            onChange={ (e) => setPassword(e.target.value) }
            type="password" 
            placeholder="Senha" />
          </Form.Group>
        <Button 
            onClick={ handleLogin }
            disabled={buttonDisabled()}
            variant="secondary" 
            type="submit">
                Acessar
        </Button>
      </Form>
    );
}

Login.propTypes = {
    history: PropTypes.shape({
      push: PropTypes.func.isRequired,
    }).isRequired,
  };