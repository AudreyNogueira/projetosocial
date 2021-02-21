import React from 'react'
import { Link, useHistory } from 'react-router-dom';

import { enviarDados } from "../../functions/database";

import "./styles.css";

const Login = () => {

    const initialState = () => {
        return(
            {
               
                email: '',
                senha: '',
              
            }
        );
    }

    const erros = {
        
        email: false,
        senha: false,

    }
    const [values,setValues] = React.useState(initialState)
    const [dados,setDados] = React.useState('')

    const atualizar = (event) => {
        const {name,value} = event.target
        setValues({
            ...values,
            [name]: value
        })
    } 

    if(dados) {
        for (const dado of dados) {
            erros[dado.param] = true
        }
    }


    const history = useHistory()
    const obj = {
        email,
        senha,
        tipo: props.tipo
    }
    console.log(dados)
    if (dados.tipo === "vendedor") {
        localStorage.setItem('auth',dados.tipo);
        localStorage.setItem('id',dados.id);
        history.push("/dicas");
    }
    if (dados.tipo === "cliente") {
        localStorage.setItem('auth',dados.tipo)
        localStorage.setItem('id',dados.id);
        history.push("/perfil");
    } else {
        //
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
                value={values.email}
                onChange={atualizar}  
                placeholder="Email" 
                erro={erros.email}
                msgErro={'Insira seus dados corretamente'}
                required 
                autoFocus 
            />
            <label htmlFor="senha" className="sr-only">Password</label>
            <input 
                type="password" 
                id="senha" 
                name="senha"
                value={values.senha}
                onChange={atualizar} 
                className="form-control" 
                placeholder="Senha" 
                erro={erros.senha}
                msgErro={'Insira uma senha válida'}
                required 
            />
            {/* {alert && <div className="alert alert-danger alert-dismissible fade show" role="alert">
                Login ou senha invalidos
                <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">×</span>
                </button>
            </div>} */}
            <button className="btn btn-lg btn-primary btn-block" type="submit">Entre</button>
            <br />
            {/* <Link to={props.caminho}>Cadastre-se</Link> */}
        </form>
    );
}

export default Login;