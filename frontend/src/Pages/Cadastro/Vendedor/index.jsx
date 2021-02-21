import React from "react";

import Input from "../../../Components/Input";
import { enviarDados } from "../../../functions/database";

const CadastroVendedor = () => {

    const initialState = () => {
        return(
            {
                nome: '',
                negocio: '',
                endereco: '',
                cpf: '',
                email: '',
                telefone: '',
                senha: '',
                confsenha: '',
            }
        );
    }

    const erros = {
        nome: false,
        negocio: false,
        endereco: false,
        cpf: false,
        email: false,
        telefone: false,
        senha: false,
        confsenha: false,
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
    if(dados===dados){
        alert = true
    }else{
        alert = false
    }
    console.log(dados)

    return (
        <>
            <div className="container pt-5">
                <div className="text-center">
                    <img className="d-block mx-auto" src="/images/logo-comercio-amigavel.png" alt="logo" width={150} height={150} />
                    <h2>Cadastro de vendedor</h2>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <h4 className="mb-3">Dados Pessoais</h4>
                        <form className="needs-validation" onSubmit={enviarDados('http://localhost:3333/vendedor', values, setDados)} noValidate>
                            <div className="row">
                                <Input
                                    type="text"
                                    className="col-md-6 mb-3"
                                    label="Nome completo"
                                    name="nome"
                                    placeholder="Digite seu nome"
                                    value={values.nome}
                                    onChange={atualizar}
                                    erro={erros.nome}
                                    msgErro={'* Campo obrigatório'}
                                />
                                
                                <Input
                                    type="text"
                                    className="col-md-6 mb-3"
                                    label="Nome do negócio"
                                    span=" (opcional)"
                                    name="negocio"
                                    placeholder="Digite o nome do seu negócio"
                                    value={values.negocio}
                                    onChange={atualizar}
                                    erro={erros.negocio}
                                    msgErro={'* Campo obrigatório'}
                                />
                            </div>
                            <div className="row">
                                <Input
                                    type="text"
                                    className="col-md-8 mb-3"
                                    label="Endereço"
                                    name="endereco"
                                    placeholder="Digite seu endereço"
                                    value={values.endereco}
                                    onChange={atualizar}
                                    erro={erros.endereco}
                                    msgErro={'* Campo obrigatório'}
                                />
                                
                                <Input
                                    type="text"
                                    className="col-md-4 mb-3"
                                    label="CPF"
                                    span=" (apenas números)"
                                    name="cpf"
                                    placeholder="000.000.000.00"
                                    value={values.cpf}
                                    onChange={atualizar}
                                    erro={erros.cpf}
                                    // msgErro={erros.cpf.msg}
                                    msgErro={'* Campo obrigatório'}
                                />
                            </div>
                            <Input
                                type="email"
                                className="mb-3"
                                label="Email"
                                name="email"
                                placeholder="seuemail@exemplo.com.br"
                                value={values.email}
                                onChange={atualizar}
                                erro={erros.email}
                                // msgErro={erros.email.msg}
                                msgErro={'* Campo obrigatório'}
                            />

                            <Input
                                type="text"
                                className="mb-3"
                                label="Telefone"
                                name="telefone"
                                placeholder="(00) 00000-0000"
                                value={values.telefone}
                                onChange={atualizar}
                                erro={erros.telefone}
                                // msgErro={erros.telefone.msg}
                                msgErro={'* Campo obrigatório'}
                            />

                            <Input
                                type="password"
                                className="mb-3"
                                label="Senha"
                                name="senha"
                                placeholder="Digite uma senha forte"
                                value={values.senha}
                                onChange={atualizar}
                                erro={erros.senha}
                                // msgErro={erros.senha.msg}
                                msgErro={'* Campo obrigatório'}
                            />

                            <Input
                                type="password"
                                className="mb-3"
                                label="Confirme a sua senha"
                                name="confSenha"
                                placeholder="Confirme sua senha"
                                value={values.confSenha}
                                onChange={atualizar}
                                erro={erros.confsenha}
                                // msgErro={erros.senha.msg}
                                msgErro={'* Campo obrigatório'}
                            />
                            <br />
                            { alert && <div className="alert alert-success alert-dismissible fade show" role="alert" > 
                            
                            Cadastro efetuado com sucesso
                             <button type="button"  onClick={() => alert = false } className="close" data-dismiss="alert" aria-label="Close">
    
                              <span aria-hidden="true">×</span>
                             </button>
                            </div> }

                            <button className="btn btn-primary btn-lg btn-block" type="submit">
                                Confirmar cadastro
                            </button>
                        </form>
                    </div>
                </div>
                <hr className="featurette-divider" />
            </div>
        </>
    );
}

export default CadastroVendedor;