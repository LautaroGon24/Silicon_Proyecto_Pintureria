import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { Link } from 'react-router-dom'
import * as API from '../../servicios/servicio'
export function EditarClientes(){
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [cuit_cuil, setCuit] = useState('');
    const [domicilio, setDomicilio] = useState('');
    const {idcliente} = useParams();
    
    const [mensajeSuccess, setmensajeSuccess] = useState('')

    useEffect(()=>{
      trae_datos(idcliente)
  },[])
  
  const trae_datos  = async ()=>{
      
      const datos_cliente = await API.getClientesById(idcliente)
      
      setNombre(datos_cliente.nombre)
      setApellido(datos_cliente.apellido)
      setCuit(datos_cliente.cuit_cuil)
      setDomicilio(datos_cliente.domicilio)
      
  }
    const editar_cliente =()=>{
      if(!nombre||!apellido||!cuit_cuil||!domicilio){
        alert('Complete los campos faltantes')
        return false;
      }
      const datos_enviar={
        nombre: nombre,
        apellido: apellido,
        cuit_cuil: cuit_cuil,
        domicilio: domicilio
      };
      API.UpdateCliente(idcliente, datos_enviar);
      
        setmensajeSuccess('Se EDITO el cliente ')
            setTimeout(()=>{
                setmensajeSuccess('')
                window.location.href=('/clientes')
            }, 2000)
            
    }
    return (
        
        
            <div className="card">
            <div className="card-header">
                Editar Cliente
            </div>
            
            <div className="card-body">
            {
      mensajeSuccess?
      <div className="alert alert-success" role="alert">
    {mensajeSuccess}
    </div>:''
    }
              <div className="form-group">
                  <label htmlFor="">Nombre</label>
                  <input type="text" 
                  value={nombre} 
                  className="form-control" 
                  placeholder="Nombre"
                  onChange={(event)=>setNombre(event.target.value)} 
                  />
                  <small id="helpId" className="text-muted">&nbsp;</small>
                </div>
                <div className="form-group">
                  <label htmlFor="">Apellido</label>
                  <input type="text" 
                  value={apellido} 
                  className="form-control" 
                  placeholder="Apellido"
                  onChange={(event)=>setApellido(event.target.value)} 
                  />
                  <small id="helpId" className="text-muted">&nbsp;</small>
                </div>
                <div className="form-group">
                  <label htmlFor="">Cuit/Cuil</label>
                  <input type="text" 
                  value={cuit_cuil} 
                  className="form-control" 
                  placeholder="Cuit/Cuil"
                  onChange={(event)=>setCuit(event.target.value)} 
                  />
                  <small id="helpId" className="text-muted">&nbsp;</small>
                </div>
                <div className="form-group">
                  <label htmlFor="">Domicilio</label>
                  <input type="text" 
                  value={domicilio} 
                  className="form-control" 
                  placeholder="Domicilio"
                  onChange={(event)=>setDomicilio(event.target.value)} 
                  />
                  <small id="helpId" className="text-muted">&nbsp;</small>
                </div>
                <div className="form-group">
                <button onClick={editar_cliente} type="submit" className="btn btn-primary">Guardar</button>
                  <Link to={'/clientes'}><button type="button" className="btn btn-secondary">Volver</button></Link>
                </div>
              
                
            </div>
            
            <div className="card-footer text-muted">
                Pintureria
            </div>
        </div>
        
    )
}