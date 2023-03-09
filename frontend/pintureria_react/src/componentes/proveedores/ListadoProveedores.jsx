

import * as API from '../../servicios/servicio'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
export function ListadoProveedores(){
    const [proveedores, setProveedores] = useState([])
    const [mensajeError, setmensajeError] = useState('')
    const [mensajeSuccess, setmensajeSuccess] = useState('')
    useEffect(()=>{
        API.getProveedores().then(setProveedores)
    }, [])
    const bajaProveedor = async (idproveedor)=>{
        console.log('el id que se dio la baja es: ', idproveedor)
        const baja_proveedor = await API.BajaProveedor(idproveedor)
        if(baja_proveedor.status){
            setmensajeError(baja_proveedor.mensaje)
            setTimeout(()=>{
              setmensajeError('')
            }, 4000)
            window.location.reload(true)
          }else{
            setmensajeError(baja_proveedor.mensaje)
            setTimeout(()=>{
              setmensajeError('')
            }, 4000)
          }
      }

      const altaProveedor = async (idproveedor)=>{
        console.log('el id que se dio el alta es: ', idproveedor)
        const alta_proveedor = await API.AltaProveedor(idproveedor)
        if(alta_proveedor.status){
            setmensajeSuccess(alta_proveedor.mensaje)
            setTimeout(()=>{
              setmensajeSuccess('')
            }, 4000)
            window.location.reload(true)
          }else{
            setmensajeError(alta_proveedor.mensaje)
            setTimeout(()=>{
              setmensajeError('')
            }, 4000)
          }
      }
    return(
        <div className="card">
            <div className="card-header">
                Lista de proveedores
            </div>
            {
            mensajeError?
            <div className="alert alert-warning" role="alert">
            {mensajeError}
             </div>:''
            }
            {
            mensajeSuccess?
            <div className="alert alert-success" role="alert">
            {mensajeSuccess}
             </div>:''
            }
            <div className="card-body">
            <>
                
                <table className="table">
                <thead>
                    <tr>
                    <th>ID</th>
                    <th>Proveedores</th>
                    <th>Cuit/Cuil</th>
                    <th>Estado</th>
                    <th>Acciones</th>
                </tr>
                </thead>
                <tbody>
                {proveedores.map((proveedor)=>(
                <tr key={proveedor.idproveedor}>
                    <td scope='row'>{proveedor.idproveedor}</td>
                    <td>{proveedor.razon_social} </td>
                    <td>{proveedor.cuit_cuil}</td>
                    <td>{proveedor.estado}</td>
                    <td>
                        <div className="btn-group" role="group" aria-label="">
                            
                            { (proveedor.estado=='A')?
                            <>
                            <Link to={`/editarproveedores/${proveedor.idproveedor}`}>
                            <button type="button" className="btn btn-warning">Editar</button>
                            </Link>
                            <button onClick={() => bajaProveedor(proveedor.idproveedor)} type="button" className="btn btn-danger">Baja</button>
                            </>
                            :
                            <button onClick={() => altaProveedor(proveedor.idproveedor)} type="button" className="btn btn-success">Alta</button>
                            }
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