
import * as API from '../../servicios/servicio'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


export function ListadoProductos(){
    const [productos, setProductos] = useState([])
    const [mensajeError, setmensajeError] = useState('')
    const [mensajeSuccess, setmensajeSuccess] = useState('')
    useEffect(()=>{
        API.getProductos().then(setProductos )
    }, [])
    
    const bajaProducto = async (idproducto)=>{
        console.log('el id que se dio la baja es: ', idproducto)
        const baja_producto = await API.BajaProducto(idproducto)
        if(baja_producto.status){
            setmensajeError(baja_producto.mensaje)
            setTimeout(()=>{
              setmensajeError('')
            }, 4000)
            window.location.reload(true)
          }else{
            setmensajeError(baja_producto.mensaje)
            setTimeout(()=>{
              setmensajeError('')
            }, 4000)
          }
      }

      const altaProducto = async (idproducto)=>{
        console.log('el id que se dio el alta es: ', idproducto)
        const alta_producto = await API.AltaProducto(idproducto)
        if(alta_producto.status){
            setmensajeSuccess(alta_producto.mensaje)
            setTimeout(()=>{
              setmensajeSuccess('')
            }, 4000)
            window.location.reload(true)
          }else{
            setmensajeError(alta_producto.mensaje)
            setTimeout(()=>{
              setmensajeError('')
            }, 4000)
          }
      }
    
    return(
        <div className="card">
            <div className="card-header">
                Lista de Productos
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
                    <th>Productos</th>
                    <th>Descripcion</th>
                    <th>Precio</th>
                    <th>Estado</th>
                    <th>Acciones</th>
                </tr>
                </thead>
                <tbody>
                {productos.map((producto)=>(
                <tr key={producto.idproducto}>
                    <td scope='row'>{producto.idproducto}</td>
                    <td>{producto.nombre}</td>
                    <td>{producto.descripcion}</td>
                    <td>{producto.precio_unidad}</td>
                    <td>{producto.estado}</td>
                    <td>
                        <div className="btn-group" role="group" aria-label="">
                            
                            { (producto.estado=='A')?
                            <>
                            <Link to={`/editarproductos/${producto.idproducto}`}><button type="button" className="btn btn-warning">Editar</button></Link>
                            <button onClick={() => bajaProducto(producto.idproducto)} type="button" className="btn btn-danger">Baja</button>
                            </>
                            :
                            <button onClick={() => altaProducto(producto.idproducto)} type="button" className="btn btn-success">Alta</button>
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