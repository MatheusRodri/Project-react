import React from 'react';
import { Link } from 'react-router-dom';

export default function Page1(){
    return(
        <div>
           <h1>PAGINA1</h1>
           <Link to="/">Home</Link>
           <br/>
           <Link to="/pagina2">Pagina 2</Link>
        </div>
    )
}