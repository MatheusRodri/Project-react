import React from 'react';

export default function Filho(props){
    return(
        <div>
            <h2>Filho</h2>
            {props.nome} tem {props.idade} anos
            <h3>Futebol: {props.esportes.futebol}</h3>
            <h3>Natação: {props.esportes.Natação}</h3>
            <h3>F1-E: {props.esportes.F1e}</h3>

            <div>
                <ul>
                    {props.musicas.map(item=>
                        <li key={item}>{item}</li>
                    )}
                </ul>
            </div>
        </div>
    )
}