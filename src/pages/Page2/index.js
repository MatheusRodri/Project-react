import React from 'react';
import { Link } from 'react-router-dom';

export default function Page2(){
    return(
        <div>
            <h1>Pagina 02</h1>
            <Link to="/">Home</Link>
            <br/>
            <Link to="/pagina1">Pagina 1</Link>
        </div>
    )
}