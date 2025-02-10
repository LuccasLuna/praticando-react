import { Button, Input } from 'antd';
import logo from "../../../assets/icons/logo-ITESP-horizontal.svg";
// import Icon from "../../../ui/icon/icon";
// import Label from "../../../ui/label/label";
import "./card.scss";

export default function Card() {
    return (
        <>
            <section className="card-login">
                <img src={logo} alt="Logo ITESP" />

                <div className="card-login__text">
                    <h1>Bem vindo (a)!</h1>
                    <p>
                        Para se manter conectado no sistema, entre com seu e-mail e senha
                    </p>
                </div>
                <form action="">
                    <div className="card-login__form">

                        <div label="Usuário">
                            <Input placeholder='Usuário'></Input>
                        </div>

                        <div label="Senha">
                            <Input type="password" placeholder='Senha'></Input>
                        </div>

                        <div className="card-login__form__buttons">  
                            <Button className="button__primary">
                                Entrar
                            </Button>
                            <Button className="button__secondary">
                                Entrar com o gov.br
                            </Button>
                            <Button className="button__secondary">
                                Entrar de outra forma....
                            </Button>
                        </div>
                    </div>
                </form>
            </section>
        </>
    );
}
