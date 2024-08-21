import './style.css';



export function InputSearch() {
    return(
        <div className='input__container'>
            <input className='input__search' type="text" placeholder="Procurar tarefa"/>
            <img className='input__img' src={require('./search2.png')} alt='adsdas'/>
        </div>
    );
}