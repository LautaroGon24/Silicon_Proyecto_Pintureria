import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { Link } from 'react-router-dom'
import * as API from '../../servicios/servicio'
export function EditarUsuarios(){
    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    
    const {idusuario} = useParams();
    
    const [mensajeSuccess, setmensajeSuccess] = useState('')

    useEffect(()=>{
      trae_datos(idusuario)
  },[])
  
  const trae_datos  = async ()=>{
      
      const datos_usuario = await API.getUsuarioById(idusuario)
      
      setUser(datos_usuario.user)
      setEmail(datos_usuario.email)
      
      
      
  }
    const editar_usuario =()=>{
      if(!user||!email){
        alert('Complete los campos faltantes')
        return false;
      }
      const datos_enviar={
        user: user,
        email: email
        

      };
      API.UpdateUsuario(idusuario, datos_enviar);
      
        setmensajeSuccess('Se EDITO el usuario ')
            setTimeout(()=>{
                setmensajeSuccess('')
                window.location.href=('/usuarios')
            }, 4000)
            
            
    }
    return (
        
        
            <div className="card">
            <div className="card-header">
                Editar Usuario
            </div>
            
            <div className="card-body">
            {
      mensajeSuccess?
      <div className="alert alert-success" role="alert">
    {mensajeSuccess}
    </div>:''
    }
              <div className="form-group">
                  <label htmlFor="">Usuario</label>
                  <input type="text" 
                  value={user} 
                  className="form-control" 
                  placeholder="Usuario"
                  onChange={(event)=>setUser(event.target.value)} 
                  />
                  <small id="helpId" className="text-muted">&nbsp;</small>
                </div>
                
                <div className="form-group">
                  <label htmlFor="">Email</label>
                  <input type="email" 
                  value={email} 
                  className="form-control" 
                  placeholder="Email"
                  onChange={(event)=>setEmail(event.target.value)} 
                  />
                  <small id="helpId" className="text-muted">&nbsp;</small>
                </div>
                
                <div className="form-group">
                <button onClick={editar_usuario} type="submit" className="btn btn-primary">Guardar</button>
                  <Link to={'/usuarios'}><button type="button" className="btn btn-secondary">Volver</button></Link>
                </div>
              
                
            </div>
            
            <div className="card-footer text-muted">
                Pintureria
            </div>
        </div>
        
    )
}