function Navegacional(props){
    return (
        <nav>
            <h1>{props.titulo}</h1>
            <ol>
                <li>{props.nav1}</li>
                <li>{props.nav2}</li>
                <li>{props.nav3}</li>
            </ol>
        </nav>
    );
}
Navegacional.defaultProps = {
    titulo: 'Mi titulo default'
}

export {Navegacional}