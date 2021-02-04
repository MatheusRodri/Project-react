import React, { useRef, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {ScaleLoader} from 'react-spinners'
import LoadingBar from 'react-top-loading-bar'

export default function Page6(){
    const[consultando,setConsultando] = useState(false)
    const ref = useRef(null)

    const salvarClick =()=>{
        toast.success('🚀 Salvo');
    }
    const consultarClick =()=>{
        setConsultando(true)
        ref.current.continuousStart()
    }
    return(
        <div>
             <LoadingBar color='#f11946' height={5} ref={ref} />
            <h1>Alertas e loading</h1>
           <div><button onClick={salvarClick}>Salvar</button></div> 
           <div><button onClick={consultarClick}>Consultar</button></div>
        {consultando && 
            <ScaleLoader
            color={'blue'}/>
            }
           <ToastContainer />
        </div>
    )
}