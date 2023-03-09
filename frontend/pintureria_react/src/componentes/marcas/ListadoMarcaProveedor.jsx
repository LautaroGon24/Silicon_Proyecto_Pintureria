

import * as API from '../../servicios/servicio'
import { useEffect, useState } from 'react'

export function ListadoMarcaProveedor(){
    
    const [marcaprove, setMarcaProve] = useState([])
   
    useEffect(()=>{
        API.getMarcaProveedor().then(setMarcaProve)
    }, [])
    
    return(
        <div className="card">
            <div className="card-header">
                Lista de Marcas-Proveedores
            </div>
            
            <div className="card-body">
            <>
                
                <table className="table">
                <thead>
                    <tr>
                    <th>Proveedor</th>
                    <th>Marca</th>
                    
                </tr>
                </thead>
                <tbody>
                {marcaprove.map((mpv, index)=>(
                <tr key={index}>
                    
                    <td>{mpv.proveedor} </td>
                    <td>{mpv.marca}</td>
                    <td>
                        
                    </td>
                </tr>
                ))}
                </tbody>
            </table>
            </>    
            </div>
            <div className="card-footer text-muted">
                Pintureria
            </div>
        </div>
    
    )
}