import React from 'react'
import { Link, useHistory } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Modal} from 'react-bootstrap';
import { enviarDados } from "../../functions/database";

import "./styles.css";

const Login = (props) => {
    const [dados,setDados] = React.useState('')
    const [email,setEmail] = React.useState('')
    const [senha,setSenha] = React.useState('')
    const [show, setShow] = React.useState(false)
    // const [alert,setAlert] = React.useState(show:!this.state.show)
    const history = useHistory()
    const obj = {
        email,
        senha,
        tipo: props.tipo
    }
    console.log(dados)
    // if (dados.tipo === "vendedor") {
    //     localStorage.setItem('auth',dados.tipo);
    //     localStorage.setItem('id',dados.id);
    //     history.push("/dicas");
    // }
    // if (dados.tipo === "cliente") {
    //     localStorage.setItem('auth',dados.tipo)
    //     localStorage.setItem('id',dados.id);
    //     history.push("/perfil");
    // } else {
    //     //
    // }
    const handleModal = () =>{
        setShow(!show)
    }

    if (dados){

        if (dados.tipo === "vendedor") {
            localStorage.setItem('auth',dados.tipo);
            localStorage.setItem('id',dados.id);
            history.push("/dicas");
        } else if (dados.tipo === "cliente") {
            localStorage.setItem('auth',dados.tipo)
            localStorage.setItem('id',dados.id);
            history.push("/perfil");
        } else if(dados!=login && dados!=senha) {
            handleModal()
        }
    }
   
    
    return(
        <form className="form-signin text-center" onSubmit={enviarDados(`http://localhost:3333/login`,obj,setDados)}>
            <img  src="/images/logo-comercio-amigavel.png" alt="Logo" width={150} height={150} />
            <h1 className="h3 mb-3 font-weight-normal">{props.titulo}</h1>
            <label htmlFor="email" className="sr-only">Email address</label>
            <input 
                className="form-control"
                type="email" 
                id="email" 
                name="email" 
                value={email}
                onChange={event => setEmail(event.target.value)}  
                placeholder="Email" 
                required 
                autoFocus 
            />
            <label htmlFor="senha" className="sr-only">Password</label>
            <input 
                type="password" 
                id="senha" 
                name="senha"
                value={senha}
                onChange={event => setSenha(event.target.value)} 
                className="form-control" 
                placeholder="Senha" 
                required 
            />
            <div>
            <button className="btn btn-primary btn-lg btn-block" type="submit">Entre</button>
           
                            <Modal show={show} onHide={handleModal}>
                                <Modal.Header closeButton>Modalhead</Modal.Header>
                                    <Modal.Body>
                                        login ou senha invalidos
                                    </Modal.Body>
                                <Modal.Footer>
                                    <Button onClick={handleModal} >
                                        fechar
                                    </Button>
                                </Modal.Footer>
                            </Modal>
            </div> 
            
            <br />
            <Link to={props.caminho}>Cadastre-se</Link>
        </form>
    );
}

export default Login;