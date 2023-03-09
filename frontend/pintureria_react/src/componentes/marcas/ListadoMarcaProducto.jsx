

import * as API from '../../servicios/servicio'
import { useEffect, useState } from 'react'

export function ListadoMarcaProducto(){
    const [marcapro, setMarcaPro] = useState([])
   
    useEffect(()=>{
        API.getMarcaProducto().then(setMarcaPro)
    }, [])
    
    return(
        <div className="card">
            <div className="card-header">
                Lista de Marcas-Productos
            </div>
            
            <div className="card-body">
            <>
                
                <table className="table">
                <thead>
                    <tr>
                    <th>Producto</th>
                    <th>Marca</th>
                    
                </tr>
                </thead>
                <tbody>
                {marcapro.map((mp, index)=>(
                <tr key={index}>
                    
                    <td>{mp.producto} </td>
                    <td>{mp.marca}</td>
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