import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { Link } from 'react-router-dom'
import * as API from '../../servicios/servicio'
export function EditarProveedores(){
    const [razon_social, setRazon] = useState('');
    
    const [cuit_cuil, setCuit] = useState('');
    
    const {idproveedor} = useParams();
    
    const [mensajeSuccess, setmensajeSuccess] = useState('')

    useEffect(()=>{
      trae_datos(idproveedor)
  },[])
  
  const trae_datos  = async ()=>{
      
      const datos_proveedor = await API.getProveedorById(idproveedor)
      
      setRazon(datos_proveedor.razon_social)
      setCuit(datos_proveedor.cuit_cuil)
      
      
  }
    const editar_proveedores =()=>{
      if(!razon_social||!cuit_cuil){
        alert('Complete los campos faltantes')
        return false;
      }
      const datos_enviar={
        razon_social: razon_social,
        
        cuit_cuil: cuit_cuil
      };
      API.UpdateProveedor(idproveedor, datos_enviar);
      
        setmensajeSuccess('Se EDITO el proveedor ')
            setTimeout(()=>{
                setmensajeSuccess('')
                window.location.href=('/proveedores')
            }, 4000)
           
    }
    return (
        
        
            <div className="card">
            <div className="card-header">
                Editar Proveedor
            </div>
            
            <div className="card-body">
            {
      mensajeSuccess?
      <div className="alert alert-success" role="alert">
    {mensajeSuccess}
    </div>:''
    }
              <div className="form-group">
                  <label htmlFor="">Razón Social</label>
                  <input type="text" 
                  value={razon_social} 
                  className="form-control" 
                  placeholder="Razon Social"
                  onChange={(event)=>setRazon(event.target.value)} 
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
                <button onClick={editar_proveedores} type="submit" className="btn btn-primary">Guardar</button>
                  <Link to={'/proveedores'}><button type="button" className="btn btn-secondary">Volver</button></Link>
                </div>
              
                
            </div>
            
            <div className="card-footer text-muted">
                Pintureria
            </div>
        </div>
        
    )
}