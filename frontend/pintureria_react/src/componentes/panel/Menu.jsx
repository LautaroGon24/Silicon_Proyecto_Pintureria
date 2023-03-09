import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'

export function Menu(){
  const[nombre_user, setnombreuser] = useState('')
  const [username, setUsername] = useState('')
  const logout = async (event)=>{
    
    
      setUsername('')
      window.localStorage.removeItem('username')
      
      window.location.href='/';
}
useEffect(()=>{
  const userLogueado = JSON.parse(localStorage.getItem('username'))
  if(userLogueado){
    
    setnombreuser(userLogueado.datos[0].user)
    
  }
  },[])
return(
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">Sistema</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link className="nav-link" to={'/'}>Inicio</Link>
          </li>
          
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Clientes
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <Link className="dropdown-item" to={'/clientes'}>Lista de clientes</Link>
              <Link className="dropdown-item" to={'/registrarclientes'}>Registrar clientes</Link>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Vendedores
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <Link className="dropdown-item" to={'/vendedores'}>Lista de vendedores</Link>
              <Link className="dropdown-item" to={'/registrarvendedores'}>Registrar vendedor</Link>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Proveedores
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <Link className="dropdown-item" to={'/proveedores'}>Lista de proveedores</Link>
              <Link className="dropdown-item" to={'/registrarproveedores'}>Registrar proveedor</Link>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Productos
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <Link className="dropdown-item" to={'/productos'}>Lista de productos</Link>
              <Link className="dropdown-item" to={'/registrarproductos'}>Registrar producto</Link>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Marcas
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <Link className="dropdown-item" to={'/marcaproducto'}>Lista de marcas-productos</Link>
              <Link className="dropdown-item" to={'/marcaproveedor'}>Lista de marcas-proveedores</Link>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Ventas
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <Link className="dropdown-item" to={'/ventas'}>Lista de ventas</Link>
              
            </div>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Usuarios
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <Link className="dropdown-item" to={'/usuarios'}>Lista de usuarios</Link>
              
            </div>
          </li>
          <ul>
            
          </ul>
          <ul>
            
          </ul>
          <ul>
            
          </ul>
          <ul>
            
          </ul>

          
          <li className="nav-item active ml-auto">
          <a className="navbar-brand"> {nombre_user}</a>
            <button onClick={logout} className='btn btn-danger'> Salir</button>
            
          </li>
        </ul>
      
      </div>
      
    </nav>

           
)
}