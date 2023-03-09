const API_URL='http://localhost:3001';

//Lista de vendedores
export async function getVendedores(){
    const token = JSON.parse(localStorage.getItem('token'));
    
    const requestOptions = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      };
    try{
        const response = await fetch(`${API_URL}/vendedores`, requestOptions);
        const data= await response.json();
        
        return data; 
    }catch (error){
        console.log('Error en el servidor', error)
    }
}

//Vendedor por ID
export async function getVendedoresById(idvendedor){
    const token = JSON.parse(localStorage.getItem('token'));
    const requestOptions = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      };
    try{
        const response = await fetch(`${API_URL}/vendedores/${idvendedor}`, requestOptions);
        const data= await response.json();
        
        return data[0]; 
    }catch (error){
        console.log('Error en el servidor', error)
    }
}

//Registro de vendedores
export async function RegistrarVendedores(datos){
    const token = JSON.parse(localStorage.getItem('token'));
    const requestOptions={
        method: 'Post',
        headers: {
            'Content-Type': 'Application/json',
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(datos)
    };
    try{
    const response = await fetch(`${API_URL}/registrarvendedores`, requestOptions)
    const data= await response.json();
    return data;
    }catch(e){
        
    }
 }

//Lista de clientes
export async function getClientes(){
    const token = JSON.parse(localStorage.getItem('token'));
    const requestOptions = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      };
    try{
        const response = await fetch(`${API_URL}/clientes`, requestOptions);
        const data= await response.json();
        
        return data; 
    }catch (error){
        console.log('Error en el servidor', error)
    }
}

//Cliente por ID
export async function getClientesById(idcliente){
    const token = JSON.parse(localStorage.getItem('token'));
    const requestOptions = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      };
    try{
        const response = await fetch(`${API_URL}/clientes/${idcliente}`, requestOptions);
        const data= await response.json();
        
        return data[0]; 
    }catch (error){
        console.log('Error en el servidor', error)
    }
}

 //Registro de cliente
export async function RegistrarClientes(datos){
    const token = JSON.parse(localStorage.getItem('token'));
    const requestOptions={
        method: 'Post',
        headers: {
            'Content-Type': 'Application/json',
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(datos)
    };
    try{
    const response = await fetch(`${API_URL}/registrarclientes`, requestOptions)
    const data= await response.json();
    return data;
    }catch(e){
        
    }
 }

 //Login
 export async function Login(datos){
    const requestOptions={
        method: 'Post',
        headers: {
            'Content-Type': 'Application/json'
        },
        body: JSON.stringify(datos)
    };
    try{
    const response = await fetch(`${API_URL}/login`, requestOptions)
    const data= await response.json();
    return data;
    }catch(e){
        alert('No se puede conectar con el servidor')
    }
 }

 //Registro
 export async function Registro(datos){
    const requestOptions={
        method: 'Post',
        headers: {
            'Content-Type': 'Application/json'
        },
        body: JSON.stringify(datos)
    };
    try{
    const response = await fetch(`${API_URL}/registro`, requestOptions)
    const data= await response.json();
    return data;
    }catch(e){
        //console.log('no funciona')
    }
 }

 //Lista de Usuarios
export async function getUsuario(){
    const token = JSON.parse(localStorage.getItem('token'));
    
    const requestOptions = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      };
    try{
        const response = await fetch(`${API_URL}/usuarios`, requestOptions);
        const data= await response.json();
        
        return data; 
    }catch (error){
        console.log('Error en el servidor', error)
    }
}

//Usuario por ID
export async function getUsuarioById(idusuario){
    const token = JSON.parse(localStorage.getItem('token'));
    const requestOptions = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      };
    try{
        const response = await fetch(`${API_URL}/usuarios/${idusuario}`, requestOptions);
        const data= await response.json();
        
        return data[0]; 
    }catch (error){
        console.log('Error en el servidor', error)
    }
}

// Edicion de usuario
export function UpdateUsuario(idusuario, datos){
    const token = JSON.parse(localStorage.getItem('token'));
    const requestOptions={
        method: 'PUT',
        headers: {
            'Content-Type': 'Application/json',
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(datos)
    };
    fetch(`${API_URL}/usuarios/${idusuario}`, requestOptions)
}

//Baja de usuario
export async function BajaUsuario(idusuario){
    const token = JSON.parse(localStorage.getItem('token'));
    const requestOptions={
        method: 'PUT',
        headers: {
            'Content-Type': 'Application/json',
            Authorization: `Bearer ${token}`,
        },
        
    };
    try{
    const response = await fetch(`${API_URL}/bajausuario/${idusuario}`, requestOptions)
    const data= await response.json();
    console.log(data)
    return data;
    }catch(e){
        alert('No se puede conectar con el servidor')
    }
 }

 //Alta usuario

 export async function AltaUsuario(idusuario){
    const token = JSON.parse(localStorage.getItem('token'));
    const requestOptions={
        method: 'PUT',
        headers: {
            'Content-Type': 'Application/json',
            Authorization: `Bearer ${token}`,
        },
        
    };
    try{
    const response = await fetch(`${API_URL}/altausuario/${idusuario}`, requestOptions)
    const data= await response.json();
    console.log(data)
    return data;
    }catch(e){
        alert('No se puede conectar con el servidor')
    }
 }

 //Baja de cliente
export async function BajaCliente(idcliente){
    const token = JSON.parse(localStorage.getItem('token'));
    const requestOptions={
        method: 'PUT',
        headers: {
            'Content-Type': 'Application/json',
            Authorization: `Bearer ${token}`,
        },
        
    };
    try{
    const response = await fetch(`${API_URL}/bajacliente/${idcliente}`, requestOptions)
    const data= await response.json();
    console.log(data)
    return data;
    }catch(e){
        alert('No se puede conectar con el servidor')
    }
 }

 //Alta cliente

 export async function AltaCliente(idcliente){
    const token = JSON.parse(localStorage.getItem('token'));
    const requestOptions={
        method: 'PUT',
        headers: {
            'Content-Type': 'Application/json',
            Authorization: `Bearer ${token}`,
        },
        
    };
    try{
    const response = await fetch(`${API_URL}/altacliente/${idcliente}`, requestOptions)
    const data= await response.json();
    console.log(data)
    return data;
    }catch(e){
        alert('No se puede conectar con el servidor')
    }
 }
// Edicion de cliente
export function UpdateCliente(idcliente, datos){
    const token = JSON.parse(localStorage.getItem('token'));
    const requestOptions={
        method: 'PUT',
        headers: {
            'Content-Type': 'Application/json',
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(datos)
    };
    fetch(`${API_URL}/clientes/${idcliente}`, requestOptions)
}

 //Baja de vendedor
export async function BajaVendedor(idvendedor){
    const token = JSON.parse(localStorage.getItem('token'));
    const requestOptions={
        method: 'PUT',
        headers: {
            'Content-Type': 'Application/json',
            Authorization: `Bearer ${token}`,
        },
        
    };
    try{
    const response = await fetch(`${API_URL}/bajavendedor/${idvendedor}`, requestOptions)
    const data= await response.json();
    
    return data;
    }catch(e){
        alert('No se puede conectar con el servidor')
    }
 }

 //Alta de vendedor

 export async function AltaVendedor(idvendedor){
    const token = JSON.parse(localStorage.getItem('token'));
    const requestOptions={
        method: 'PUT',
        headers: {
            'Content-Type': 'Application/json',
            Authorization: `Bearer ${token}`,
        },
        
    };
    try{
    const response = await fetch(`${API_URL}/altavendedor/${idvendedor}`, requestOptions)
    const data= await response.json();
    
    return data;
    }catch(e){
        alert('No se puede conectar con el servidor')
    }
 }

// Edicion de vendedor
export function UpdateVendedor(idvendedor, datos){
    const token = JSON.parse(localStorage.getItem('token'));
    const requestOptions={
        method: 'PUT',
        headers: {
            'Content-Type': 'Application/json',
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(datos)
    };
    fetch(`${API_URL}/vendedores/${idvendedor}`, requestOptions)
};

 //Lista de proveedores
export async function getProveedores(){
    const token = JSON.parse(localStorage.getItem('token'));
    const requestOptions = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      };
    try{
        const response = await fetch(`${API_URL}/proveedores`, requestOptions);
        const data= await response.json();
        
        return data; 
    }catch (error){
        console.log('Error en el servidor', error)
    }
}

//Proveedor por ID
export async function getProveedorById(idproveedor){
    const token = JSON.parse(localStorage.getItem('token'));
    const requestOptions = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      };
    try{
        const response = await fetch(`${API_URL}/proveedores/${idproveedor}`, requestOptions);
        const data= await response.json();
        
        return data[0]; 
    }catch (error){
        console.log('Error en el servidor', error)
    }
}

//Registro de proveedor
export async function RegistrarProveedor(datos){
    const token = JSON.parse(localStorage.getItem('token'));
    const requestOptions={
        method: 'Post',
        headers: {
            'Content-Type': 'Application/json',
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(datos)
    };
    try{
    const response = await fetch(`${API_URL}/registrarproveedores`, requestOptions)
    const data= await response.json();
    return data;
    }catch(e){
        
    }
 }

 //Baja de proveedor
 export async function BajaProveedor(idproveedor){
    const token = JSON.parse(localStorage.getItem('token'));
    const requestOptions={
        method: 'PUT',
        headers: {
            'Content-Type': 'Application/json',
            Authorization: `Bearer ${token}`,
        },
        
    };
    try{
    const response = await fetch(`${API_URL}/bajaproveedor/${idproveedor}`, requestOptions)
    const data= await response.json();
    
    return data;
    }catch(e){
        alert('No se puede conectar con el servidor')
    }
 }

 //Alta de proveedor

 export async function AltaProveedor(idproveedor){
    const token = JSON.parse(localStorage.getItem('token'));
    const requestOptions={
        method: 'PUT',
        headers: {
            'Content-Type': 'Application/json',
            Authorization: `Bearer ${token}`,
        },
        
    };
    try{
    const response = await fetch(`${API_URL}/altaproveedor/${idproveedor}`, requestOptions)
    const data= await response.json();
    
    return data;
    }catch(e){
        alert('No se puede conectar con el servidor')
    }
 }

 // Edicion de proveedor
export function UpdateProveedor(idproveedor, datos){
    const token = JSON.parse(localStorage.getItem('token'));
    const requestOptions={
        method: 'PUT',
        headers: {
            'Content-Type': 'Application/json',
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(datos)
    };
    fetch(`${API_URL}/proveedores/${idproveedor}`, requestOptions)
};

 //Lista de productos
export async function getProductos(){
    const token = JSON.parse(localStorage.getItem('token'));
    
    const requestOptions = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      };
    try{
        const response = await fetch(`${API_URL}/productos`, requestOptions);
        const data= await response.json();
        
        return data; 
    }catch (error){
        console.log('Error en el servidor', error)
    }
}

//Producto por ID
export async function getProductoById(idproducto){
    const token = JSON.parse(localStorage.getItem('token'));
    const requestOptions = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      };
    try{
        const response = await fetch(`${API_URL}/productos/${idproducto}`, requestOptions);
        const data= await response.json();
        
        return data[0]; 
    }catch (error){
        console.log('Error en el servidor', error)
    }
}


//Registro de producto
export async function RegistrarProducto(datos){
    const token = JSON.parse(localStorage.getItem('token'));
    const requestOptions={
        method: 'Post',
        headers: {
            'Content-Type': 'Application/json',
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(datos)
    };
    try{
    const response = await fetch(`${API_URL}/registrarproductos`, requestOptions)
    const data= await response.json();
    return data;
    }catch(e){
        
    }
 }

 //Baja de producto
 export async function BajaProducto(idproducto){
    const token = JSON.parse(localStorage.getItem('token'));
    const requestOptions={
        method: 'PUT',
        headers: {
            'Content-Type': 'Application/json',
            Authorization: `Bearer ${token}`,
        },
        
    };
    try{
    const response = await fetch(`${API_URL}/bajaproducto/${idproducto}`, requestOptions)
    const data= await response.json();
    console.log(data)
    return data;
    }catch(e){
        alert('No se puede conectar con el servidor')
    }
 }

 //Alta de producto

 export async function AltaProducto(idproducto){
    const token = JSON.parse(localStorage.getItem('token'));
    const requestOptions={
        method: 'PUT',
        headers: {
            'Content-Type': 'Application/json',
            Authorization: `Bearer ${token}`,
        },
        
    };
    try{
    const response = await fetch(`${API_URL}/altaproducto/${idproducto}`, requestOptions)
    const data= await response.json();
    console.log(data)
    return data;
    }catch(e){
        alert('No se puede conectar con el servidor')
    }
 }

 // Edicion de producto
export function UpdateProducto(idproducto, datos){
    const token = JSON.parse(localStorage.getItem('token'));
    const requestOptions={
        method: 'PUT',
        headers: {
            'Content-Type': 'Application/json',
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(datos)
    };
    fetch(`${API_URL}/productos/${idproducto}`, requestOptions)
};

//Lista Marca-Producto
export async function getMarcaProducto(){
    const token = JSON.parse(localStorage.getItem('token'));
    
    const requestOptions = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      };
    try{
        const response = await fetch(`${API_URL}/marcaproducto`, requestOptions);
        const data= await response.json();
        
        return data; 
    }catch (error){
        console.log('Error en el servidor', error)
    }
}

//Lista Marca-Proveedor
export async function getMarcaProveedor(){
    const token = JSON.parse(localStorage.getItem('token'));
    
    const requestOptions = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      };
    try{
        const response = await fetch(`${API_URL}/marcaproveedor`, requestOptions);
        const data= await response.json();
        
        return data; 
    }catch (error){
        console.log('Error en el servidor', error)
    }
}

 //Lista de ventas
export async function getVentas(){
    const token = JSON.parse(localStorage.getItem('token'));
    const requestOptions = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      };
    try{
        const response = await fetch(`${API_URL}/ventas`,requestOptions);
        const data= await response.json();
        
        return data; 
    }catch (error){
        console.log('Error en el servidor', error)
    }
}

//Baja de proveedor
export async function BajaVenta(idventa){
    const token = JSON.parse(localStorage.getItem('token'));
    const requestOptions={
        method: 'PUT',
        headers: {
            'Content-Type': 'Application/json',
            Authorization: `Bearer ${token}`,
        },
        
    };
    try{
    const response = await fetch(`${API_URL}/bajaventa/${idventa}`, requestOptions)
    const data= await response.json();
    
    return data;
    }catch(e){
        alert('No se puede conectar con el servidor')
    }
 }

//Registro de ventas
// export async function RegistrarVentas(datos){
//     const token = JSON.parse(localStorage.getItem('token'));
//     const requestOptions={
//         method: 'Post',
//         headers: {
//             'Content-Type': 'Application/json',
//             Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify(datos)
//     };
//     try{
//     const response = await fetch(`${API_URL}/registrarventas`, requestOptions)
//     const data= await response.json();
//     return data;
//     }catch(e){
        
//     }
//  }

 //Lista de productos por nombre
// export async function getNombreProducto(){
//     const token = JSON.parse(localStorage.getItem('token'));
//     const requestOptions = {
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: `Bearer ${token}`,
//         },
//       };
//     try{
//         const response = await fetch(`${API_URL}/productosnombre`,requestOptions);
//         const data= await response.json();
        
//         return data; 
//     }catch (error){
//         console.log('Error en el servidor', error)
//     }
// }