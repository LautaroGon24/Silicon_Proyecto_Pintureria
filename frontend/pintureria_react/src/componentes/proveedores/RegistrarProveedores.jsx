import { useState } from "react"
import { Link } from 'react-router-dom';
import * as API from '../../servicios/servicio'
export function RegistrarProveedor(){
    const [razon_social, setRazon] = useState('')
    const [cuit_cuil, setCuit] = useState('')
    
    const [mensajeSuccess, setmensajeSuccess] = useState('')
    const [mensajeError, setmensajeError] = useState('')
    const registroForm = async (event)=>{
        event.preventDefault();
        const proveedor = await API.RegistrarProveedor({razon_social, cuit_cuil})
        if(proveedor.status){
          
          
          setmensajeSuccess(proveedor.mensaje)
          setTimeout(()=>{
            setmensajeSuccess('');
            window.location.href=('/')
          }, 4000)
        }
        else{
          setmensajeError(proveedor.mensaje)
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
                Registrar Proveedor
            </div>
            <div className="card-body">
              <form onSubmit={registroForm}>
              <div className="form-group">
                  <label htmlFor="">Razón Social</label>
                  <input required type="text" 
                  value={razon_social} 
                  className="form-control" 
                  placeholder="Razón Social"
                  onChange={(event)=>setRazon(event.target.value)} 
                  />
                  <small id="helpId" className="text-muted">&nbsp;</small>
                </div>
                <div className="form-group">
                  <label htmlFor="">Cuit/Cuil</label>
                  <input required type="text" 
                  value={cuit_cuil} 
                  className="form-control" 
                  placeholder="Cuit/Cuil"
                  onChange={(event)=>setCuit(event.target.value)} 
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