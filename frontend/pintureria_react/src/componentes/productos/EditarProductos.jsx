import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { Link } from 'react-router-dom'
import * as API from '../../servicios/servicio'
export function EditarProductos(){
    const [nombre, setNombre] = useState('');
    
    const [descripcion, setDescripcion] = useState('');
    const [precio_unidad, setPrecio] = useState('');
    const {idproducto} = useParams();
    
    const [mensajeSuccess, setmensajeSuccess] = useState('')

    useEffect(()=>{
      trae_datos(idproducto)
  },[])
  
  const trae_datos  = async ()=>{
      
      const datos_producto = await API.getProductoById(idproducto)
      
      setNombre(datos_producto.nombre)
      setDescripcion(datos_producto.descripcion)
      setPrecio(datos_producto.precio_unidad)
      
      
  }
    const editar_productos =()=>{
      if(!nombre||!descripcion||!precio_unidad){
        alert('Complete los campos faltantes')
        return false;
      }
      const datos_enviar={
        nombre: nombre,
        descripcion: descripcion,
        precio_unidad: precio_unidad

      };
      API.UpdateProducto(idproducto, datos_enviar);
      
        setmensajeSuccess('Se EDITO el producto ')
            setTimeout(()=>{
                setmensajeSuccess('')
                window.location.href=('/productos')
            }, 4000)
            
    }
    return (
        
        
            <div className="card">
            <div className="card-header">
                Editar Producto
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
                  <label htmlFor="">Descripción</label>
                  <input type="text" 
                  value={descripcion} 
                  className="form-control" 
                  placeholder="Descripcion"
                  onChange={(event)=>setDescripcion(event.target.value)} 
                  />
                  <small id="helpId" className="text-muted">&nbsp;</small>
                </div>
                <div className="form-group">
                  <label htmlFor="">Precio</label>
                  <input type="number" 
                  value={precio_unidad} 
                  className="form-control" 
                  placeholder="Precio"
                  onChange={(event)=>setPrecio(event.target.value)} 
                  />
                  <small id="helpId" className="text-muted">&nbsp;</small>
                </div>
                <div className="form-group">
                <button onClick={editar_productos} type="submit" className="btn btn-primary">Guardar</button>
                  <Link to={'/productos'}><button type="button" className="btn btn-secondary">Volver</button></Link>
                </div>
              
                
            </div>
            
            <div className="card-footer text-muted">
                Pintureria
            </div>
        </div>
        
    )
}