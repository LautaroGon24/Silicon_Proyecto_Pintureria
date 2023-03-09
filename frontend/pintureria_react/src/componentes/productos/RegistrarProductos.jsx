import { useState } from "react"
import { Link } from 'react-router-dom';
import * as API from '../../servicios/servicio'
export function RegistrarProducto(){
    const [nombre, setNombre] = useState('')
    const [descripcion, setDescripcion] = useState('')
    const [precio_unidad, setPrecio] = useState('')
    
    const [mensajeSuccess, setmensajeSuccess] = useState('')
    const [mensajeError, setmensajeError] = useState('')
    
    const registroForm = async (event)=>{
        event.preventDefault();
        const producto = await API.RegistrarProducto({nombre, descripcion, precio_unidad})
        if(producto.status){
          
          
          setmensajeSuccess(producto.mensaje)
          setTimeout(()=>{
            setmensajeSuccess('');
            window.location.href=('/')
          }, 4000)
        }else{
          setmensajeError(producto.mensaje)
          setTimeout(()=>{
            
              setmensajeError('');
          }, 4000)
      }
      }
    return(
        <>
        <div className="container">
        {
      mensajeSuccess?
      <div className="alert alert-success" role="alert">
    {mensajeSuccess}
    </div>:''
    }
    {
            mensajeError?
            <div className="alert alert-danger" role="alert">
                {mensajeError}
            </div>:''
        }
        <div className="card">
            <div className="card-header">
                Registrar Producto
            </div>
            <div className="card-body">
              <form onSubmit={registroForm}>
              <div className="form-group">
                  <label htmlFor="">Nombre</label>
                  <input required type="text" 
                  value={nombre} 
                  className="form-control" 
                  placeholder="Nombre"
                  onChange={(event)=>setNombre(event.target.value)} 
                  />
                  <small id="helpId" className="text-muted">&nbsp;</small>
                </div>
                <div className="form-group">
                  <label htmlFor="">Descripción</label>
                  <input required type="text" 
                  value={descripcion} 
                  className="form-control" 
                  placeholder="Descripción"
                  onChange={(event)=>setDescripcion(event.target.value)} 
                  />
                  <small id="helpId" className="text-muted">&nbsp;</small>
                </div>
                <div className="form-group">
                  <label htmlFor="">Precio</label>
                  <input required type="number" 
                  value={precio_unidad} 
                  className="form-control" 
                  placeholder="Precio"
                  onChange={(event)=>setPrecio(event.target.value)} 
                  />
                  <small id="helpId" className="text-muted">&nbsp;</small>
                </div>
                
                <div className="form-group">
                  <button type="submit" className="btn btn-primary">Guardar</button>
                  <Link to={'/'}><button type="button" className="btn btn-secondary">Volver</button></Link>
                </div>
              </form>
                
            </div>
            
            <div className="card-footer text-muted">
                Pintureria
            </div>
        </div>
        </div>
        </>
    )
}