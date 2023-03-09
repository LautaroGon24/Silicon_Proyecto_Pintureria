import { useState } from "react"
import { Link } from "react-router-dom"
import * as API from '../../servicios/servicio'

export function Login(){
    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')
    const [mensajeError, setmensajeError] = useState('')
    
    const enviarLogin = async (event)=>{
      event.preventDefault();
      const usuario = await API.Login({user, password})
      if(usuario.status){
        window.localStorage.setItem('username', JSON.stringify(usuario))
        window.localStorage.setItem('token', JSON.stringify(usuario.token))
        //setUsername(usuario)
        setUser('')
        setPassword('')
        window.location.reload(true)
      }else{
        setmensajeError(usuario.mensaje)
        setTimeout(()=>{
          setmensajeError('')
        }, 4000)
      }
    }
    
    return(
        <div className="container">
         <form onSubmit={enviarLogin}>
    
    <h1 className="h3 mb-3 fw-normal">Ingrese sus datos para ingresar</h1>
    {
      mensajeError?
      <div className="alert alert-danger" role="alert">
    {mensajeError}
    </div>:''
    }
    
    
    <div className="form-floating">
      <input 
      type="text" 
      className="form-control" 
      id="floatingInput" 
      placeholder="Usuario"
      value={user}
      onChange={(event)=>setUser(event.target.value)}
      />
      <label htmlFor="floatingInput">Usuario</label>
    </div>
    <div className="form-floating">
      <input 
      type="password" 
      className="form-control" 
      id="floatingPassword" 
      placeholder="Contraseña"
      value={password}
      onChange={(event)=>setPassword(event.target.value)}
      />
      <label htmlFor="floatingPassword">Contraseña</label>
    </div>

   
    <button className="w-100 btn btn-lg btn-primary" type="submit">Ingresar</button>
    <Link to={'/registro'}>
      Registro
    </Link>
  </form>
        </div>
    )
}