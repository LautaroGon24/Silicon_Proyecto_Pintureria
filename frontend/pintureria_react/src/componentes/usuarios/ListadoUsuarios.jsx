
import * as API from '../../servicios/servicio'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export function ListadoUsuarios(){
    const [usuarios, setUsuarios] = useState([])
    const [mensajeError, setmensajeError] = useState('')
    const [mensajeSuccess, setmensajeSuccess] = useState('')
    useEffect(()=>{
        API.getUsuario().then(setUsuarios)
    }, [])
    
    const bajaUsuario = async (idusuario)=>{
        console.log('el id que se dio la baja es: ', idusuario)
        const baja_usuario = await API.BajaUsuario(idusuario)
        if(baja_usuario.status){
            setmensajeError(baja_usuario.mensaje)
            setTimeout(()=>{
              setmensajeError('')
            }, 4000)
            window.location.reload(true)
          }else{
            setmensajeError(baja_usuario.mensaje)
            setTimeout(()=>{
              setmensajeError('')
            }, 4000)
          }
      }

      const altaUsuario = async (idusuario)=>{
        console.log('el id que se dio el alta es: ', idusuario)
        const alta_usuario = await API.AltaUsuario(idusuario)
        if(alta_usuario.status){
            setmensajeSuccess(alta_usuario.mensaje)
            setTimeout(()=>{
              setmensajeSuccess('')
            }, 4000)
            window.location.reload(true)
          }else{
            setmensajeError(alta_usuario.mensaje)
            setTimeout(()=>{
              setmensajeError('')
            }, 4000)
          }
      }
    
    return(
      
        <div className="card">
            <div className="card-header">
                Lista de Usuarios
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
                    <th>Usuarios</th>
                    <th>Email</th>
                    <th>Estado</th>
                    <th>Acciones</th>
                </tr>
                </thead>
                <tbody>
                {usuarios.map((usuario)=>(
                <tr key={usuario.idusuario}>
                    <td scope='row'>{usuario.idusuario}</td>
                    <td>{usuario.user}</td>
                    <td>{usuario.email}</td>
                    <td>{usuario.estado}</td>
                    <td>
                        <div className="btn-group" role="group" aria-label="">
                            
                            { (usuario.estado=='A')?
                            <>

                            <Link to={`/editarusuarios/${usuario.idusuario}`}><button type="button" className="btn btn-warning">Editar</button></Link>
                            <button onClick={() => bajaUsuario(usuario.idusuario)} type="button" className="btn btn-danger">Baja</button>
                            </>
                            :
                            <button onClick={() => altaUsuario(usuario.idusuario)} type="button" className="btn btn-success">Alta</button>
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