import React, { useState } from 'react';
import Filho  from '../Filho'
export default function Pai(){
    const [nome, setNome] = useState('Matheus')
    const [idade, setIdade] = useState(18)
    const [esportes, setEsportes] = useState({
        futebol:"Manja",
        Natação:"Profissional",
        F1e:'DÁ AULA'
    })

    const [musicas,setMusicas] = useState(['Eletronica','Forró','Rock','POP'])
    return(
        <div>
            <h2>Pai</h2>
            <Filho nome={nome}
                   idade = {idade}
                   esportes={esportes}
                   musicas={musicas}/>

        <Filho nome='Aline'
                   idade = {20}
                   esportes={{futebol:10,Natação:10,F1e:20}}
                   musicas={musicas}/>
        </div>
    )
}