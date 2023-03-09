
import * as API from '../../servicios/servicio'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

export function ListadoVendedores(){
    const [vendedores, setVendedores] = useState([]);
    const [mensajeError, setmensajeError] = useState('')
    const [mensajeSuccess, setmensajeSuccess] = useState('')
    useEffect(()=>{
        API.getVendedores().then(setVendedores)
    }, [])
    const bajaVendedor = async (idvendedor)=>{
        console.log('el id que se dio la baja es: ', idvendedor)
        const baja_vendedor = await API.BajaVendedor(idvendedor)
        if(baja_vendedor.status){
            setmensajeError(baja_vendedor.mensaje)
            setTimeout(()=>{
              setmensajeError('')
            }, 4000)
            window.location.reload(true)
          }else{
            setmensajeError(baja_vendedor.mensaje)
            setTimeout(()=>{
              setmensajeError('')
            }, 4000)
          }
      }

      const altaVendedor = async (idvendedor)=>{
        console.log('el id que se dio el alta es: ', idvendedor)
        const alta_vendedor = await API.AltaVendedor(idvendedor)
        if(alta_vendedor.status){
            setmensajeSuccess(alta_vendedor.mensaje)
            setTimeout(()=>{
              setmensajeSuccess('')
            }, 4000)
            window.location.reload(true)
          }else{
            setmensajeError(alta_vendedor.mensaje)
            setTimeout(()=>{
              setmensajeError('')
            }, 4000)
          }
      }
    return(
      
        <div className="card">
            <div className="card-header">
                Lista de vendedores
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
                    <th>Vendedores</th>
                    <th>Cuit/Cuil</th>
                    <th>Domicilio</th>
                    <th>Telefono</th>
                    <th>Sexo</th>
                    <th>Email</th>
                    <th>Fecha Ingreso</th>
                    <th>Estado</th>
                    <th>Acciones</th>
                </tr>
                </thead>
                <tbody>
                {vendedores.map((vendedor)=>(
                <tr key={vendedor.idvendedor}>
                    <td scope='row'>{vendedor.idvendedor}</td>
                    <td>{vendedor.apellido} {vendedor.nombre} </td>
                    <td>{vendedor.cuit_cuil}</td>
                    <td>{vendedor.domicilio}</td>
                    <td>{vendedor.telefono}</td>
                    <td>{vendedor.sexo}</td>
                    <td>{vendedor.email}</td>
                    <td>{vendedor.fecha}</td>
                    <td>{vendedor.estado}</td>
                    <td>
                        <div className="btn-group" role="group" aria-label="">
                            
                            { (vendedor.estado=='A')?
                            <>
                            <Link to={`/editarvendedores/${vendedor.idvendedor}`}>
                            <button type="button" className="btn btn-warning">Editar</button>
                            </Link>
                            <button onClick={() => bajaVendedor(vendedor.idvendedor)} type="button" className="btn btn-danger">Baja</button>
                            </>
                            :
                            <button onClick={() => altaVendedor(vendedor.idvendedor)} type="button" className="btn btn-success">Alta</button>
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
