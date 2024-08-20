import './style.css';

export function BlackBox ({
    children
}) {
    return(
        <div className="container__box">
           {children}
        </div>
    )
}