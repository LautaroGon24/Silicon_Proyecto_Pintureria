import * as API from '../../servicios/servicio'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export function ListadoClientes(){
    const [clientes, setClientes] = useState([])
    const [mensajeError, setmensajeError] = useState('')
    const [mensajeSuccess, setmensajeSuccess] = useState('')
    useEffect(()=>{
        API.getClientes().then(setClientes)
    }, [])
    const bajaCliente = async (idcliente)=>{
        console.log('el id que se dio la baja es: ', idcliente)
        const baja_cliente = await API.BajaCliente(idcliente)
        if(baja_cliente.status){
            setmensajeError(baja_cliente.mensaje)
            setTimeout(()=>{
              setmensajeError('')
            }, 4000)
            window.location.reload(true)
          }else{
            setmensajeError(baja_cliente.mensaje)
            setTimeout(()=>{
              setmensajeError('')
            }, 4000)
          }
      }

      const altaCliente = async (idcliente)=>{
        console.log('el id que se dio el alta es: ', idcliente)
        const alta_cliente = await API.AltaCliente(idcliente)
        if(alta_cliente.status){
            setmensajeSuccess(alta_cliente.mensaje)
            setTimeout(()=>{
              setmensajeSuccess('')
            }, 4000)
            window.location.reload(true)
          }else{
            setmensajeError(alta_cliente.mensaje)
            setTimeout(()=>{
              setmensajeError('')
            }, 4000)
          }
      }
    return(
      
        <div className="card">
            <div className="card-header">
                Lista de clientes
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
                    <th>Clientes</th>
                    <th>Cuit/Cuil</th>
                    <th>Domicilio</th>
                    <th>Estado</th>
                    <th>Acciones</th>
                </tr>
                </thead>
                <tbody>
                {clientes.map((cliente)=>(
                <tr key={cliente.idcliente}>
                    <td scope='row'>{cliente.idcliente}</td>
                    <td>{cliente.apellido} {cliente.nombre} </td>
                    <td>{cliente.cuit_cuil}</td>
                    <td>{cliente.domicilio}</td>
                    <td>{cliente.estado}</td>
                    <td>
                        <div className="btn-group" role="group" aria-label="">
                          
                            
                            { (cliente.estado=='A')?
                            <>
                            <Link to={`/editarclientes/${cliente.idcliente}`}>
                            <button type="button" className="btn btn-warning">Editar</button>
                            </Link>
                            <button onClick={() => bajaCliente(cliente.idcliente)} type="button" className="btn btn-danger">Baja</button>
                            </>
                            :
                            <button onClick={() => altaCliente(cliente.idcliente)} type="button" className="btn btn-success">Alta</button>
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