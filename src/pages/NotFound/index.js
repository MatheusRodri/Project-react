import React from 'react';
import OPS from './download.jpg'
import './notfound.css'
export default function NotFound(){
    return(
        <div className="div">
           <img  className="img" src={OPS} alt="Não encontrado"/>
        </div>
    )
}