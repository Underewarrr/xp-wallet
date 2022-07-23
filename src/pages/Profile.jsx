import {React, useState} from 'react'
import PropTypes from 'prop-types'
import Header from '../component/Header'
import { Card, Form, Button } from 'react-bootstrap'

const Profile = props => {


    const [email, setEmail] = useState('');
    function handleEmailInputChange(event) {
      setEmail(event.target.value);
    }
    
    function saveEmailToLocalStorage (email) {
      localStorage.setItem('userEmail', email);
    }
    
    return (
    <>
    <Header />
    <Card>
        <Card.Header>
            <h4>Editar sua conta</h4>
        </Card.Header>
        <Card.Body>
            <Form>
                
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control 
                    onChange={handleEmailInputChange}
                    type="email" placeholder="Digite seu email" />
                </Form.Group>
                <Button 
                onClick={() => {
                    saveEmailToLocalStorage(email);
                    props.history.push('/painel/perfil?email=' + email);
                }
                }
                variant="primary" type="submit">
                    Salvar
                </Button>
            </Form>
        </Card.Body>
    </Card>
    </>
  )
}

Profile.propTypes = {}

export default Profile