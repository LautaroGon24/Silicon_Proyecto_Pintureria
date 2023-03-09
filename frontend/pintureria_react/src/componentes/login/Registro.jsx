import { useState } from "react"
import { Link } from 'react-router-dom';
import * as API from '../../servicios/servicio'

export function Registro(){
    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [mensajeSuccess, setmensajeSuccess] = useState('')
    const [mensajeError, setmensajeError] = useState('')
    const registroForm = async (event)=>{
        event.preventDefault();
        const usuario = await API.Registro({user, password, email})
        if(usuario.status){
          setmensajeSuccess(usuario.mensaje)
          setTimeout(()=>{
              setmensajeSuccess('');
          }, 4000)
          window.location.href=('/')
      }else{
          setmensajeError(usuario.mensaje)
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
                Crear Usuario
            </div>
            <div className="card-body">
              <form onSubmit={registroForm}>
              <div className="form-group">
                  <label htmlFor="">Usuario</label>
                  <input required type="text" 
                  value={user} 
                  className="form-control" 
                  placeholder="Usuario"
                  onChange={(event)=>setUser(event.target.value)} 
                  />
                  <small id="helpId" className="text-muted">&nbsp;</small>
                </div>
                <div className="form-group">
                  <label htmlFor="">Password</label>
                  <input required type="password" 
                  value={password} 
                  className="form-control" 
                  placeholder="Password"
                  onChange={(event)=>setPassword(event.target.value)} 
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