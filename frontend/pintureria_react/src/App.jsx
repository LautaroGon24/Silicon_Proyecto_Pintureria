import { useEffect, useState } from 'react'

import { Routes, Route } from 'react-router-dom'
import { Principal } from './componentes/panel/Principal'
import { Login } from './componentes/login/Login'
import { Menu } from './componentes/panel/Menu'
import { Registro } from './componentes/login/Registro'

import { ListadoClientes } from './componentes/clientes/ListadoClientes'
import { ListadoVendedores } from './componentes/vendedores/ListadoVendedores'
import { ListadoProveedores } from './componentes/proveedores/ListadoProveedores'
import { ListadoUsuarios } from './componentes/usuarios/ListadoUsuarios'
import { ListadoProductos } from './componentes/productos/ListadoProductos'
import { ListadoMarcaProducto } from './componentes/marcas/ListadoMarcaProducto'
import { ListadoMarcaProveedor } from './componentes/marcas/ListadoMarcaProveedor'
import { ListadoVentas } from './componentes/ventas/ListadoVentas'
import { RegistrarProveedor } from './componentes/proveedores/RegistrarProveedores'
import { RegistrarProducto } from './componentes/productos/RegistrarProductos'
import { RegistrarCliente } from './componentes/clientes/RegistrarClientes'
import { RegistrarVendedor } from './componentes/vendedores/RegistrarVendedores'
import { EditarClientes } from './componentes/clientes/EditarClientes'
import { EditarVendedores } from './componentes/vendedores/EditarVendedores'
import { EditarProveedores } from './componentes/proveedores/EditarProveedores'
import { EditarProductos } from './componentes/productos/EditarProductos'
import { EditarUsuarios } from './componentes/usuarios/EditarUsuarios'








function App(){
const[user, setUser] = useState('');
useEffect(()=>{
const userLogueado = JSON.parse(localStorage.getItem('username'))
if(userLogueado){
  setUser(userLogueado)
  
}
},[])


  return (
<>
{
  !user?
  <>
  <Routes>
    <Route path='*' element={<Login/>}></Route>
    <Route path='/registro' element={<Registro/>}></Route>
    
  </Routes>
  
  </>
  :
  <div className='container'>
    <Menu/>
     <Routes>
        <Route path='/' element={<Principal/>}></Route>
        
        <Route path='/clientes' element={<ListadoClientes />}></Route>
        <Route path='/vendedores' element={<ListadoVendedores />}></Route>
        <Route path='/proveedores' element={<ListadoProveedores />}></Route>
        <Route path='/usuarios' element={<ListadoUsuarios />}></Route>
        <Route path='/productos' element={<ListadoProductos />}></Route>
        <Route path='/marcaproducto' element={<ListadoMarcaProducto />}></Route>
        <Route path='/marcaproveedor' element={<ListadoMarcaProveedor />}></Route>
        <Route path='/ventas' element={<ListadoVentas />}></Route>
        <Route path='/registrarclientes' element={<RegistrarCliente />}></Route>
        <Route path='/registrarvendedores' element={<RegistrarVendedor />}></Route>
        <Route path='/registrarproveedores' element={<RegistrarProveedor />}></Route>
        <Route path='/registrarproductos' element={<RegistrarProducto />}></Route>
        
        <Route path='/editarclientes/:idcliente' element={<EditarClientes />}></Route>
        <Route path='/editarvendedores/:idvendedor' element={<EditarVendedores />}></Route>
        <Route path='/editarproveedores/:idproveedor' element={<EditarProveedores />}></Route>
        <Route path='/editarproductos/:idproducto' element={<EditarProductos />}></Route>
        <Route path='/editarusuarios/:idusuario' element={<EditarUsuarios />}></Route>
        
      </Routes>
</div>
}
    </>
  )
}

export default App
