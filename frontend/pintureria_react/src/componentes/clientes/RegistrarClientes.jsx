import { useState } from "react"
import { Link } from 'react-router-dom';
import * as API from '../../servicios/servicio'
export function RegistrarCliente(){
    
    const [nombre, setNombre] = useState('')
    const [apellido, setApellido] = useState('')
    const [domicilio, setDomicilio] = useState('')
    const [cuit_cuil, setCuit] = useState('')
    const [mensajeSuccess, setmensajeSuccess] = useState('')
    
    const registroForm = async (event)=>{
        event.preventDefault();
        const cliente = await API.RegistrarClientes({nombre, apellido, domicilio, cuit_cuil})
        if(cliente.status){
          
          
          setmensajeSuccess(cliente.mensaje)
          setTimeout(()=>{
            setmensajeSuccess('');
            window.location.href=('/')
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
        <div className="card">
            <div className="card-header">
                Registrar Cliente
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
                  <label htmlFor="">Apellido</label>
                  <input required type="text" 
                  value={apellido} 
                  className="form-control" 
                  placeholder="Apellido"
                  onChange={(event)=>setApellido(event.target.value)} 
                  />
                  <small id="helpId" className="text-muted">&nbsp;</small>
                </div>
                <div className="form-group">
                  <label htmlFor="">Domicilio</label>
                  <input required type="text" 
                  value={domicilio} 
                  className="form-control" 
                  placeholder="Domicilio"
                  onChange={(event)=>setDomicilio(event.target.value)} 
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