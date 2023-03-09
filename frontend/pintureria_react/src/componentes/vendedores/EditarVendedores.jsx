import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { Link } from 'react-router-dom'
import * as API from '../../servicios/servicio'

export function EditarVendedores(){
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [cuit_cuil, setCuit] = useState('');
    const [domicilio, setDomicilio] = useState('');
    const [telefono, setTelefono] = useState('');
    const [sexo, setSexo] = useState('');
    const [email, setEmail] = useState('');
    const [fecha_ingreso, setFecha] = useState('');
    const {idvendedor} = useParams();
    
    const [mensajeSuccess, setmensajeSuccess] = useState('')

    useEffect(()=>{
      trae_datos(idvendedor)
  },[])
  
  const trae_datos  = async ()=>{
      
      const datos_vendedor = await API.getVendedoresById(idvendedor)
      
      setNombre(datos_vendedor.nombre)
      setApellido(datos_vendedor.apellido)
      setCuit(datos_vendedor.cuit_cuil)
      setDomicilio(datos_vendedor.domicilio)
      setTelefono(datos_vendedor.telefono)
      setSexo(datos_vendedor.sexo)
      setEmail(datos_vendedor.email)
      setFecha(datos_vendedor.fecha)
      
  }
    const editar_vendedor =()=>{
      if(!nombre||!apellido||!cuit_cuil||!domicilio||!telefono||!sexo||!email||!fecha_ingreso){
        alert('Complete los campos faltantes')
        return false;
      }
      const datos_enviar={
        nombre: nombre,
        apellido: apellido,
        cuit_cuil: cuit_cuil,
        domicilio: domicilio,
        telefono: telefono,
        sexo: sexo,
        email: email,
        fecha_ingreso: fecha_ingreso
      };
      API.UpdateVendedor(idvendedor, datos_enviar);
      
        setmensajeSuccess('Se EDITO el vendedor ')
            setTimeout(()=>{
                setmensajeSuccess('')
                window.location.href=('/vendedores')
            }, 4000)
            
    }
    return (
        
        
            <div className="card">
            <div className="card-header">
                Editar Vendedor
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
                  <label htmlFor="">Telefono</label>
                  <input type="text" 
                  value={telefono} 
                  className="form-control" 
                  placeholder="Telefono"
                  onChange={(event)=>setTelefono(event.target.value)} 
                  />
                  <small id="helpId" className="text-muted">&nbsp;</small>
                </div>
                <div className="form-group">
                  <label htmlFor="">Sexo</label>
                  <input type="text" 
                  value={sexo} 
                  className="form-control" 
                  placeholder="Sexo"
                  onChange={(event)=>setSexo(event.target.value)} 
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
                  <label htmlFor="">Fecha de Ingreso</label>
                  <input type="text" 
                  value={fecha_ingreso} 
                  className="form-control" 
                  placeholder="Año-Mes-Día"
                  onChange={(event)=>setFecha(event.target.value)} 
                  />
                  <small id="helpId" className="text-muted">&nbsp;</small>
                </div>
                <div className="form-group">
                <button onClick={editar_vendedor} type="button" className="btn btn-primary">Guardar</button>
                  <Link to={'/vendedores'}><button type="button" className="btn btn-secondary">Volver</button></Link>
                </div>
              
                
            </div>
            
            <div className="card-footer text-muted">
                Pintureria
            </div>
        </div>
        
    )
}