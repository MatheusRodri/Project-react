import React, { useState } from 'react';

export default function Page3(){
    const [mensagem,setMensagem] = useState('Sejam Bem-vindos !!')
    const [nome,setNome]         = useState("Matheus")
    const [linguagens, setLinguagens] = useState(['HTML','CSS','JS','PHP'])

    return(

        <div>
            <h1>Page3</h1>
            <h2>{mensagem}</h2>
            {nome === 'Matheus' && (
               <h3>{nome} é lindo</h3>
            )}
             {nome !== 'Matheus' && (
               <h3>{nome} é feio</h3>
            )}
            <ul>
            {linguagens.map(item => 
                <li key={item}>{item}</li>
                )}
            </ul>
        </div>
    )
}