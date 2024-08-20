import './style.css';
import moment from 'moment';
import 'moment/locale/pt-br';

moment.locale('pt-br');
export function TitleDate (){
    return(
        <h1 className="title__date">
           {moment().format('dddd') } , <span className='title__date--day'>{moment().format('D') }</span> <span className='textComum'>de</span> {moment().format('MMMM')} 
        </h1>
    )
}


 