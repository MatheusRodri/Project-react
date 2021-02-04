import React from 'react';
import {Link}  from 'react-router-dom';
import APP from '../../App';


export default function Home(){
    return(
        <div>
            <APP/>
            <Link to="/pagina1">Navegação: Pagina </Link>
            <br/>
            <Link to="/pagina2">Navegação:Pagina2</Link>
            <br/>
            <Link to="/pagina3">Renderização</Link>
            <br/>
            <Link to="/pagina4">Eventos</Link>
            <br/>
            <Link to="/pagina5">COMUNICAÇÃO ENTRE COMPONENTES</Link>
            <br/>
            <Link to="/pagina6">Alertas e load</Link>
        </div>
    )
}