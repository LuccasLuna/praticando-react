import Card from './card/Card.jsx';
import background from '../../assets/images/Background.png';
import './login.scss';

export default function Login() {
    return(
        <div className='login'>
            <img className="background" src={background} />
            <Card/>
        </div>
    )
}