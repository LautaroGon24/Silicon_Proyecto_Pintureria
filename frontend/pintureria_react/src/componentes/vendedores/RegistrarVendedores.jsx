import { useState } from "react"
import { Link } from 'react-router-dom';
import * as API from '../../servicios/servicio'
export function RegistrarVendedor(){
    
    const [nombre, setNombre] = useState('')
    const [apellido, setApellido] = useState('')
    const [domicilio, setDomicilio] = useState('')
    const [cuit_cuil, setCuit] = useState('')
    const [telefono, setTelefono] = useState('')
    const [sexo, setSexo] = useState('')
    const [email, setEmail] = useState('')
    const [fecha_ingreso, setFecha] = useState('')
    const [mensajeSuccess, setmensajeSuccess] = useState('')
    
    const registroForm = async (event)=>{
        event.preventDefault();
        const vendedor = await API.RegistrarVendedores({nombre, apellido, domicilio, cuit_cuil, telefono, sexo, email, fecha_ingreso})
        if(vendedor.status){
          
          
          setmensajeSuccess(vendedor.mensaje)
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
                Registrar Vendedor
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
                  <label htmlFor="">Telefono</label>
                  <input required type="text" 
                  value={telefono} 
                  className="form-control" 
                  placeholder="Telefono"
                  onChange={(event)=>setTelefono(event.target.value)} 
                  />
                  <small id="helpId" className="text-muted">&nbsp;</small>
                </div>
                <div className="form-group">
                  <label htmlFor="">Sexo</label>
                  <input required type="text" 
                  value={sexo} 
                  className="form-control" 
                  placeholder="Sexo"
                  onChange={(event)=>setSexo(event.target.value)} 
                  />
                  <small id="helpId" className="text-muted">&nbsp;</small>
                </div>
                <div className="form-group">
                  <label htmlFor="">Email</label>
                  <input required type="email" 
                  value={email} 
                  className="form-control" 
                  placeholder="Email"
                  onChange={(event)=>setEmail(event.target.value)} 
                  />
                  <small id="helpId" className="text-muted">&nbsp;</small>
                </div>
                <div className="form-group">
                  <label htmlFor="">Fecha de Ingreso</label>
                  <input required type="text" 
                  value={fecha_ingreso} 
                  className="form-control" 
                  placeholder="Año-Mes-Día"
                  onChange={(event)=>setFecha(event.target.value)} 
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
