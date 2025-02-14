import { Button, Input } from 'antd';
import logo from "../../../assets/icons/logo-ITESP-horizontal.svg";
// import Icon from "../../../ui/icon/icon";
// import Label from "../../../ui/label/label";
import "./card.scss";
import { useSessionContext } from '../../../context/loginSession';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


export default function Card() {
    const navigate = useNavigate();
    const qualquerCoisa = useSessionContext()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    function handleSubmit(e) {
        e.preventDefault()
        qualquerCoisa.login(email, password, navigate)
        
    }
    
    return (
        <>
            <section className="card-login">
                <img className='card-login__logo__itesp' src={logo} alt="Logo ITESP" />

                <div className="card-login__text">
                    <h1 className='card-login__text__title'>Bem vindo (a)!</h1>
                    <p>
                        Para se manter conectado no sistema, entre com seu e-mail e senha
                    </p>
                </div>
                <form action="">
                    <div className="card-login__form">
                        <div className='card-login__form__inputs'>
                            <label htmlFor="">Usuário</label>
                            <Input placeholder='Digite seu login de rede' className='card-login__form__input' 
                            value={email} onChange={e => setEmail(e.target.value)}
                            >

                            </Input>
                            <label htmlFor="">Senha</label>
                            <Input type="password" placeholder='Digite seu login de rede' className='card-login__form__input' 
                            value={password} onChange={e => setPassword(e.target.value)}
                            ></Input>
                        </div>

                        <div className="card-login__form__buttons">  
                            <Button className="button__primary" onClick={handleSubmit}>
                                Login
                            </Button>
                            <Button className="button__secondary">
                                Entrar com gov.br
                            </Button>
                            <Button className="button__secondary">
                                Login com UGE
                            </Button>
                        </div>
                    </div>
                </form>
            </section>
        </>
    );
}
