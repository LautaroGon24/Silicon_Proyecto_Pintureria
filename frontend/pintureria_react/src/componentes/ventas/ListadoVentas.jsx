

import * as API from '../../servicios/servicio'
import { useEffect, useState } from 'react'
export function ListadoVentas(){
    const [ventas, setVentas] = useState([])
    const [mensajeError, setmensajeError] = useState('')
    useEffect(()=>{
        API.getVentas().then(setVentas)
    }, [])
    
    const bajaVenta = async (idventa)=>{
        console.log('el id que se dio la baja es: ', idventa)
        const baja_venta = await API.BajaVenta(idventa)
        if(baja_venta.status){
            setmensajeError(baja_venta.mensaje)
            setTimeout(()=>{
              setmensajeError('')
            }, 4000)
            window.location.reload(true)
          }else{
            setmensajeError(baja_venta.mensaje)
            setTimeout(()=>{
              setmensajeError('')
            }, 4000)
          }
      }
    return(

        <div className="card">
            <div className="card-header">
                Lista de ventas
            </div>
            {
            mensajeError?
            <div className="alert alert-warning" role="alert">
            {mensajeError}
             </div>:''
            }
            <div className="card-body">
            <>
                
                <table className="table">
                <thead>
                    <tr>
                    
                    <th>Fecha</th>
                    <th>Cliente</th>
                    <th>Producto</th>
                    <th>Cantidad</th>
                    <th>Vendedor</th>
                    <th>Estado</th>
                    <th>Acciones</th>
                </tr>
                </thead>
                <tbody>
                {ventas.map((venta)=>(
                <tr key={venta.idventa}>
                
                    <td>{venta.fecha} </td>
                    <td>{venta.clientes}</td>
                    <td>{venta.producto}</td>
                    <td>{venta.cantidad}</td>
                    <td>{venta.vendedor}</td>
                    <td>{venta.estado}</td>
                    <td>
                        <div className="btn-group" role="group" aria-label="">
                            
                             
                            <>
                            
                            
                            <button onClick={() => bajaVenta(venta.idventa)} type="button" className="btn btn-danger">Eliminar</button>
                            </>
                            
                            
                            
                            
                        </div>
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