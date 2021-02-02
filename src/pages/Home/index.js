import React from 'react';
import {Link}  from 'react-router-dom';
import APP from '../../App';


export default function Home(){
    return(
        <div>
            <APP/>
            <Link to="/pagina1">Ir para pagina seguinte</Link>
            <br/>
            <Link to="/pagina2">Ir para pagina seguinte</Link>
        </div>
    )
}