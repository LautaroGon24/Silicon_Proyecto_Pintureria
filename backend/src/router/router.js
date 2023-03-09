const express = require('express');
const router = express();
//Token
const jwt = require('jsonwebtoken');
//Encriptación de password
const bcrypt = require('bcrypt');
//Conexion mysql

const mysqlConexion = require('../database/database')

//Pantalla de inicio
router.get('/', (req, res) => {
    res.send('Pantalla de inicio de aplicacion');
});

//VENDEDORES

//devuelve lista de vendedores
router.get('/vendedores', verificarToken, (req, res) => {

    jwt.verify(req.token, 'pintureriaclave', (error) => {
        if (error) {
            res.sendStatus(403);
        } else {
            const query = 'select *, DATE_FORMAT(fecha_ingreso, "%Y-%m-%d") as fecha from vendedores order by estado';
            mysqlConexion.query(query, (err, rows) => {
                if (!err) {
                    res.json(rows);
                } else {
                    console.log(err)
                }
            })
        }
    })

});


//BAJA Y ALTA DE VENDEDOR

router.put('/bajavendedor/:idvendedor', verificarToken, (req, res) => {

    jwt.verify(req.token, 'pintureriaclave', (error) => {
        if (error) {
            res.sendStatus(403);
        } else {
            let idvendedor = req.params.idvendedor;
            let query = `UPDATE vendedores SET estado='B' WHERE idvendedor='${idvendedor}'`;
            mysqlConexion.query(query, (err, registros) => {
                if (!err) {
                    res.json({
                        status: true,
                        mensaje: "El vendedor se dio de BAJA correctamente"
                    });
                } else {
                    console.log(err)
                }
            })
        }
    })
});

router.put('/altavendedor/:idvendedor', verificarToken, (req, res) => {
    jwt.verify(req.token, 'pintureriaclave', (error) => {
        if (error) {
            res.sendStatus(403);
        } else {
            let idvendedor = req.params.idvendedor;
            let query = `UPDATE vendedores SET estado='A' WHERE idvendedor='${idvendedor}'`;
            mysqlConexion.query(query, (err, registros) => {
                if (!err) {
                    res.json({
                        status: true,
                        mensaje: "El vendedor se dio de ALTA correctamente"
                    });
                } else {
                    console.log(err)
                }
            })
        }
    })

});


//devuelve datos de un vendedor 
router.get('/vendedores/:idvendedor', verificarToken, (req, res) => {
    jwt.verify(req.token, 'pintureriaclave', (error) => {
        if (error) {
            res.sendStatus(403);
        } else {
            const { idvendedor } = req.params;

            const query = `select *, DATE_FORMAT(fecha_ingreso, "%Y-%m-%d") as fecha from vendedores where idvendedor=${idvendedor}`;
            mysqlConexion.query(query, (err, rows) => {
                if (!err) {
                    res.json(rows);
                } else {
                    console.log(err)
                }
            })
        }
    })

});



//insertar vendedor por metodo POST
router.post('/registrarvendedores', verificarToken, (req, res) => {
    jwt.verify(req.token, 'pintureriaclave', (error) => {
        if (error) {
            res.sendStatus(403);
        } else {
            const { nombre, apellido, domicilio, cuit_cuil, telefono, sexo, email, fecha_ingreso } = req.body

            let query = `INSERT INTO vendedores (nombre, apellido, domicilio, cuit_cuil, telefono, sexo, email, fecha_ingreso) VALUES ('${nombre}','${apellido}','${domicilio}','${cuit_cuil}', '${telefono}','${sexo}', '${email}', '${fecha_ingreso}')`;
            mysqlConexion.query(query, (err, rows) => {
                if (!err) {
                    res.json({
                        status: true,
                        mensaje: "El vendedor se registró correctamente"
                    });
                } else {
                    res.send('Ocurrio un error desde el servidor' + err);
                }
            })
        }
    })

});

//metodo para editar un vendedor
router.put('/vendedores/:idvendedor', verificarToken, (req, res) => {
    jwt.verify(req.token, 'pintureriaclave', (error) => {
        if (error) {
            res.sendStatus(403);
        } else {
            let idvendedor = req.params.idvendedor;

            const { nombre, apellido, domicilio, cuit_cuil, telefono, sexo, email, fecha_ingreso } = req.body

            let query = `UPDATE vendedores set nombre='${nombre}', apellido='${apellido}', domicilio='${domicilio}', sexo='${sexo}', email='${email}', telefono='${telefono}', cuit_cuil='${cuit_cuil}', fecha_ingreso='${fecha_ingreso}' WHERE idvendedor='${idvendedor}'`;
            mysqlConexion.query(query, (err, rows) => {
                if (!err) {
                    res.send('El id del vendedor que se editó es: ' + idvendedor + ' y se modificó los datos a: ' + nombre + ' ' + apellido);
                } else {
                    console.log(err)
                }
            })
        }
    })

});

//CLIENTES

//devuelve lista de clientes
router.get('/clientes', verificarToken, (req, res) => {

    jwt.verify(req.token, 'pintureriaclave', (error) => {
        if (error) {
            res.sendStatus(403);
        } else {
            const query = 'select * from clientes order by estado';
            mysqlConexion.query(query, (err, rows) => {
                if (!err) {
                    res.json(rows);
                } else {
                    console.log(err)
                }
            })
        }
    })

});

//BAJA Y ALTA DE CLIENTES

router.put('/bajacliente/:idcliente', verificarToken, (req, res) => {
    jwt.verify(req.token, 'pintureriaclave', (error) => {
        if (error) {
            res.sendStatus(403);
        } else {
            let idcliente = req.params.idcliente;
            let query = `UPDATE clientes SET estado='B' WHERE idcliente='${idcliente}'`;
            mysqlConexion.query(query, (err, registros) => {
                if (!err) {
                    res.json({
                        status: true,
                        mensaje: "El cliente se dio de BAJA correctamente"
                    });
                } else {
                    console.log(err)
                }
            })
        }
    })

});


router.put('/altacliente/:idcliente', verificarToken, (req, res) => {
    jwt.verify(req.token, 'pintureriaclave', (error) => {
        if (error) {
            res.sendStatus(403);
        } else {
            let idcliente = req.params.idcliente;
            let query = `UPDATE clientes SET estado='A' WHERE idcliente='${idcliente}'`;
            mysqlConexion.query(query, (err, registros) => {
                if (!err) {
                    res.json({
                        status: true,
                        mensaje: "El cliente se dio de ALTA correctamente"
                    });
                } else {
                    console.log(err)
                }
            })
        }
    })


});


// devuelve datos de un cliente
router.get('/clientes/:idcliente', verificarToken, (req, res) => {
    jwt.verify(req.token, 'pintureriaclave', (error) => {
        if (error) {
            res.sendStatus(403);
        } else {
            const { idcliente } = req.params;
            const query = `select * from clientes where idcliente=${idcliente}`;
            mysqlConexion.query(query, (err, rows) => {
                if (!err) {
                    res.json(rows);
                } else {
                    console.log(err)
                }
            })
        }
    })

});

//insertar clientes por metodo POST
router.post('/registrarclientes', verificarToken, (req, res) => {
    jwt.verify(req.token, 'pintureriaclave', (error) => {
        if (error) {
            res.sendStatus(403);
        } else {
            const { nombre, apellido, domicilio, cuit_cuil } = req.body

            let query = `INSERT INTO clientes (nombre, apellido, domicilio, cuit_cuil) VALUES ('${nombre}','${apellido}','${domicilio}','${cuit_cuil}')`;
            mysqlConexion.query(query, (err, rows) => {
                if (!err) {
                    res.json({
                        status: true,
                        mensaje: "El cliente se registró correctamente"
                    });
                } 
            })
        }
    })


});

//metodo para editar un cliente
router.put('/clientes/:idcliente', verificarToken, (req, res) => {
    jwt.verify(req.token, 'pintureriaclave', (error) => {
        if (error) {
            res.sendStatus(403);
        } else {
            let idcliente = req.params.idcliente;

            const { nombre, apellido, domicilio, cuit_cuil } = req.body

            let query = `UPDATE clientes set nombre='${nombre}', apellido='${apellido}', domicilio='${domicilio}', cuit_cuil='${cuit_cuil}' WHERE idcliente='${idcliente}'`;
            mysqlConexion.query(query, (err, rows) => {
                if (!err) {
                    res.send('El id del cliente que se editó es: ' + idcliente + ' y se modificó los datos a: ' + nombre + ' ' + apellido);
                } else {
                    console.log(err)
                }
            })
        }
    })
});

//VENTAS

//devuelve lista de ventas
router.get('/ventas', verificarToken, (req, res) => {


    jwt.verify(req.token, 'pintureriaclave', (error) => {
        if (error) {
            res.sendStatus(403);
        } else {
            const query = `SELECT ventas.idventa, DATE_FORMAT(ventas.fecha, "%Y-%m-%d") as fecha , (concat_ws(' ', vendedores.nombre, vendedores.apellido)) as vendedor, (concat_ws(' ', clientes.nombre, clientes.apellido)) as clientes, productos.nombre as producto, ventas.cantidad, ventas.estado from ventas left join vendedores on ventas.idvendedor = vendedores.idvendedor left join clientes on ventas.idcliente = clientes.idcliente left join productos on ventas.idproducto = productos.idproducto WHERE ventas.estado='A'`;
            mysqlConexion.query(query, (err, rows) => {
                if (!err) {
                    res.json(rows);
                } else {
                    console.log(err)
                }
            })
        }
    })

});

//BAJA de Venta

router.put('/bajaventa/:idventa', verificarToken, (req, res) => {

    jwt.verify(req.token, 'pintureriaclave', (error) => {
        if (error) {
            res.sendStatus(403);
        } else {
            let idventa = req.params.idventa;
            let query = `UPDATE ventas SET estado='B' WHERE idventa='${idventa}'`;
            mysqlConexion.query(query, (err, registros) => {
                if (!err) {
                    res.json({
                        status: true,
                        mensaje: "La venta se eliminó correctamente"
                    });
                } else {
                    console.log(err)
                }
            })
        }
    })
});

// insertar venta por metodo POST
// router.post('/registrarventas', (req, res) => {
    
//             const { idproducto, cantidad } = req.body
//             let query = `INSERT INTO ventas (fecha, idproducto, cantidad) VALUES (NOW(), '${idproducto}','${cantidad}'`;
//             mysqlConexion.query(query, (err, rows) => {
//                 if (!err) {
//                     res.send('Se registro correctamente la venta: ' + idventa);
//                 } else {
//                     console.log('Ocurrio un error en registro de la venta')
//                 }
//             })
        
    
// });



//PROVEEDORES

//devuelve lista de proveedores
router.get('/proveedores', verificarToken, (req, res) => {


    jwt.verify(req.token, 'pintureriaclave', (error) => {
        if (error) {
            res.sendStatus(403);
        } else {
            const query = 'SELECT * FROM proveedores ORDER BY estado';
            mysqlConexion.query(query, (err, rows) => {
                if (!err) {
                    res.json(rows);
                } else {
                    console.log(err)
                }
            })
        }
    })

});


//BAJA Y ALTA DE PROVEEDORES

router.put('/bajaproveedor/:idproveedor', verificarToken, (req, res) => {
    jwt.verify(req.token, 'pintureriaclave', (error) => {
        if (error) {
            res.sendStatus(403);
        } else {
            let idproveedor = req.params.idproveedor;
            let query = `UPDATE proveedores SET estado='B' WHERE idproveedor='${idproveedor}'`;
            mysqlConexion.query(query, (err, registros) => {
                if (!err) {
                    res.json({
                        status: true,
                        mensaje: "El proveedor se dio de BAJA correctamente"
                    });
                } else {
                    console.log(err)
                }
            })

        }
    })
});

router.put('/altaproveedor/:idproveedor', verificarToken, (req, res) => {
    jwt.verify(req.token, 'pintureriaclave', (error) => {
        if (error) {
            res.sendStatus(403);
        } else {
            let idproveedor = req.params.idproveedor;
            let query = `UPDATE proveedores SET estado='A' WHERE idproveedor='${idproveedor}'`;
            mysqlConexion.query(query, (err, registros) => {
                if (!err) {
                    res.json({
                        status: true,
                        mensaje: "El proveedor se dio de ALTA correctamente"
                    });
                } else {
                    console.log(err)
                }
            })
        }
    })

});


//devuelve datos de un proveedor 
router.get('/proveedores/:idproveedor', verificarToken, (req, res) => {
    jwt.verify(req.token, 'pintureriaclave', (error) => {
        if (error) {
            res.sendStatus(403);
        } else {
            const { idproveedor } = req.params;
            console.log('el id del proveedor es: ', idproveedor)
            const query = `select * from proveedores where idproveedor=${idproveedor}`;
            mysqlConexion.query(query, (err, rows) => {
                if (!err) {
                    res.json(rows);
                } else {
                    console.log(err)
                }
            })
        }
    })

});

// router.get('/proveedores/:idproveedor',verificarToken, (req, res)=>{
//     const parametro = req.params.idproveedor;

//     if(esNumero(parametro)){
//         res.json(
//             {
//             status: false,
//             mensaje: "El valor que se espera debe ser un numero entero"
//             });
//     }else{
//         jwt.verify(req.token, 'pintureriaclave', (error, valido)=>{
//             if(error){
//                 res.sendStatus(403);
//             }else{
//                 mysqlConexion.query(`select * from proveedores where idproveedor=?`,[parametro], (err, rows)=>{
//                     if(!err){
//                        if(rows.length!=0){ 
//                         res.json(rows);
//                        }else{
//                         res.json(
//                             {
//                                 status: false,
//                                 mensaje:"El ID del proveedor no existe en la base de datos."
//                        });
//                       }   
//                     }else{
//                         res.json(
//                         {
//                             status: false,
//                             mensaje:"Error en el servidor."
//                         });
//                     }
//                 })
//             }
//         })
//     }
// });

//insertar proveedor por metodo POST
router.post('/registrarproveedores', verificarToken, (req, res) => {



    jwt.verify(req.token, 'pintureriaclave', (error) => {
        if (error) {
            res.sendStatus(403);
        } else {
            const { razon_social, cuit_cuil } = req.body

            let query = `INSERT INTO proveedores (razon_social, cuit_cuil) VALUES ('${razon_social}','${cuit_cuil}')`;
            mysqlConexion.query(query, (err, rows) => {
                if (!err) {
                    res.json({
                        status: true,
                        mensaje: "El proveedor se registró correctamente"
                    });
                } else {
                    res.json({
                        status: false,
                        mensaje: "Proveedor existente. El registro no se pudo realizar"
                    })
                }
            })
        }
    })


});


//metodo para editar un proveedor
router.put('/proveedores/:idproveedor', verificarToken, (req, res) => {
    jwt.verify(req.token, 'pintureriaclave', (error) => {
        if (error) {
            res.sendStatus(403);
        } else {
            let idproveedor = req.params.idproveedor;

            const { razon_social, cuit_cuil } = req.body

            let query = `UPDATE proveedores set razon_social='${razon_social}', cuit_cuil='${cuit_cuil}' WHERE idproveedor='${idproveedor}'`;
            mysqlConexion.query(query, (err, rows) => {
                if (!err) {
                    res.send('El id del proveedor que se editó es: ' + idproveedor + ' y se modificó los datos a: ' + razon_social);
                } else {
                    console.log(err)
                }
            })
        }
    })

});

//PRODUCTOS


//devuelve lista de productos
router.get('/productos', verificarToken, (req, res) => {
    jwt.verify(req.token, 'pintureriaclave', (error) => {
        if (error) {
            res.sendStatus(403);
        } else {
            const query = 'select * from productos order by estado';
            mysqlConexion.query(query, (err, rows) => {
                if (!err) {
                    res.json(rows);
                } else {
                    console.log(err)
                }
            })
        }
    })

});

//devuelve datos de un producto
router.get('/productos/:idproducto', verificarToken, (req, res) => {
    jwt.verify(req.token, 'pintureriaclave', (error) => {
        if (error) {
            res.sendStatus(403);
        } else {
            const { idproducto } = req.params;
            console.log('el id del producto es: ', idproducto)
            const query = `select * from productos where idproducto=${idproducto}`;
            mysqlConexion.query(query, (err, rows) => {
                if (!err) {
                    res.json(rows);
                } else {
                    console.log(err)
                }
            })
        }
    })


});

//insertar producto por metodo POST
router.post('/registrarproductos', verificarToken, (req, res) => {
    jwt.verify(req.token, 'pintureriaclave', (error) => {
        if (error) {
            res.sendStatus(403);
        } else {
            const { nombre, descripcion, precio_unidad } = req.body

            let query = `INSERT INTO productos (nombre, descripcion, precio_unidad) VALUES ('${nombre}','${descripcion}','${precio_unidad}')`;
            mysqlConexion.query(query, (err, rows) => {
                if (!err) {
                    res.json({
                        status: true,
                        mensaje: "El producto se registró correctamente"
                    });
                } else {
                    res.json({
                        status: false,
                        mensaje: "Producto existente. El registro no se pudo realizar"
                    })
                }
            })
        }
    })


});


//metodo para editar un producto

router.put('/productos/:idproducto', verificarToken, (req, res) => {
    jwt.verify(req.token, 'pintureriaclave', (error) => {
        if (error) {
            res.sendStatus(403);
        } else {
            let idproducto = req.params.idproducto;

            const { nombre, descripcion, precio_unidad } = req.body

            let query = `UPDATE productos set nombre='${nombre}', descripcion='${descripcion}', precio_unidad='${precio_unidad}' WHERE idproducto='${idproducto}'`;
            mysqlConexion.query(query, (err, rows) => {
                if (!err) {
                    res.send('El id del producto que se editó es: ' + idproducto + ' y se modificó los datos a: ' + nombre);
                } else {
                    console.log(err)
                }
            })
        }
    })


});

//BAJA Y ALTA producto
router.put('/bajaproducto/:idproducto', verificarToken, (req, res) => {
    jwt.verify(req.token, 'pintureriaclave', (error) => {
        if (error) {
            res.sendStatus(403);
        } else {
            let idproducto = req.params.idproducto;
            let query = `UPDATE productos SET estado='B' WHERE idproducto='${idproducto}'`;
            mysqlConexion.query(query, (err, registros) => {
                if (!err) {
                    res.json({
                        status: true,
                        mensaje: "El producto se dio de BAJA correctamente"
                    });
                } else {
                    console.log(err)
                }
            })
        }
    })

});



router.put('/altaproducto/:idproducto', verificarToken, (req, res) => {
    jwt.verify(req.token, 'pintureriaclave', (error) => {
        if (error) {
            res.sendStatus(403);
        } else {
            let idproducto = req.params.idproducto;
            let query = `UPDATE productos SET estado='A' WHERE idproducto='${idproducto}'`;
            mysqlConexion.query(query, (err, registros) => {
                if (!err) {
                    res.json({
                        status: true,
                        mensaje: "El producto se dio de ALTA correctamente"
                    });
                } else {
                    console.log(err)
                }
            })

        }
    })


});

//MARCA-PRODUCTO
router.get('/marcaproducto', verificarToken, (req, res) => {

    jwt.verify(req.token, 'pintureriaclave', (error) => {
        if (error) {
            res.sendStatus(403);
        } else {
            mysqlConexion.query(`SELECT productos.nombre as producto, marcas.nombre as marca FROM marcas_productos left join productos on marcas_productos.idproducto = productos.idproducto inner join marcas on marcas_productos.idmarca = marcas.idmarca`, (err, rows) => {
                if (!err) {
                    res.json(rows);
                } else {
                    console.log(err)
                }
            })
        }
    })

});
//MARCA-PROVEEDOR
router.get('/marcaproveedor', verificarToken, (req, res) => {

    jwt.verify(req.token, 'pintureriaclave', (error) => {
        if (error) {
            res.sendStatus(403);
        } else {
            mysqlConexion.query(`SELECT marcas.nombre as marca, proveedores.razon_social as proveedor FROM proveedores_marcas left join proveedores on proveedores_marcas.idproveedor = proveedores.idproveedor inner join marcas on proveedores_marcas.idmarca = marcas.idmarca `, (err, rows) => {
                if (!err) {
                    res.json(rows);
                } else {
                    console.log(err)
                }
            })
        }
    })

});
//USUARIOS
//Lista de usuarios
router.get('/usuarios', verificarToken, (req, res) => {

    jwt.verify(req.token, 'pintureriaclave', (error) => {
        if (error) {
            res.sendStatus(403);
        } else {
            mysqlConexion.query(`SELECT * from usuarios order by estado`, (err, rows) => {
                if (!err) {
                    res.json(rows);
                } else {
                    console.log(err)
                }
            })
        }
    })

});


//devuelve datos de un usuario 
router.get('/usuarios/:idusuario', verificarToken, (req, res) => {
    jwt.verify(req.token, 'pintureriaclave', (error) => {
        if (error) {
            res.sendStatus(403);
        } else {
            const { idusuario } = req.params;
            
            const query = `select * from usuarios where idusuario=${idusuario}`;
            mysqlConexion.query(query, (err, rows) => {
                if (!err) {
                    res.json(rows);
                } else {
                    console.log(err)
                }
            })

        }
    })
});

//BAJA Y ALTA USUARIO

router.put('/bajausuario/:idusuario', verificarToken, (req, res) => {
    jwt.verify(req.token, 'pintureriaclave', (error) => {
        if (error) {
            res.sendStatus(403);
        } else {
            let idusuario = req.params.idusuario;
            let query = `UPDATE usuarios SET estado='B' WHERE idusuario='${idusuario}'`;
            mysqlConexion.query(query, (err, registros) => {
                if (!err) {
                    res.json({
                        status: true,
                        mensaje: "El usuario se dio de BAJA correctamente"
                    });
                } else {
                    console.log(err)
                }
            })
        }
    })


});


router.put('/altausuario/:idusuario', verificarToken, (req, res) => {
    jwt.verify(req.token, 'pintureriaclave', (error) => {
        if (error) {
            res.sendStatus(403);
        } else {
            let idusuario = req.params.idusuario;
            let query = `UPDATE usuarios SET estado='A' WHERE idusuario='${idusuario}'`;
            mysqlConexion.query(query, (err, registros) => {
                if (!err) {
                    res.json({
                        status: true,
                        mensaje: "El usuario se dio de ALTA correctamente"
                    });
                } else {
                    console.log(err)
                }
            })

        }
    })
});




//metodo para editar usuario

router.put('/usuarios/:idusuario', verificarToken, (req, res) => {
    jwt.verify(req.token, 'pintureriaclave', (error) => {
        if (error) {
            res.sendStatus(403);
        } else {
            let idusuario = req.params.idusuario;

            const { user, email } = req.body

            let query = `UPDATE usuarios set user='${user}', email='${email}' WHERE idusuario='${idusuario}'`;
            mysqlConexion.query(query, (err, rows) => {
                if (!err) {
                    res.send('El id del usuario que se editó es: ' + idusuario + ' y se modificó los datos a: ' + user);
                } else {
                    console.log(err)
                }
            })
        }
    })

});

//registro de usuario
router.post('/registro', async (req, res) => {
    const { user, password, email } = req.body
    let hash = bcrypt.hashSync(password, 10);
    let query = `INSERT INTO usuarios (user, email, password, fecha_creacion) VALUES ('${user}', '${email}', '${hash}', NOW())`;
    mysqlConexion.query(query, (err, rows) => {
        if (!err) {
            res.json({
                status: true,
                mensaje: "El usuario se registró correctamente"
            });
        } else {

            res.json({
                status: false,
                mensaje: "Error de servidor. El registro no se pudo realizar"
            })
        }

    })
});
//Login de usuario

router.post('/login', (req, res) => {
    const { user, password } = req.body
    if (user != undefined && password != undefined) {
        mysqlConexion.query('SELECT usuarios.idusuario, usuarios.user, usuarios.password, usuarios.email from usuarios WHERE usuarios.estado="A" AND usuarios.user=?', [user], (err, rows) => {
            if (!err) {
                if (rows.length != 0) {
                    const bcryptPassword = bcrypt.compareSync(password, rows[0].password);
                    if (bcryptPassword) {
                        jwt.sign({ rows }, 'pintureriaclave', { expiresIn: '7200s' }, (err, token) => {
                            res.json(
                                {
                                    status: true,
                                    datos: rows,
                                    token: token
                                });
                        })
                    } else {
                        res.json(
                            {
                                status: false,
                                mensaje: "La contraseña es incorrecta"
                            });
                    }
                } else {
                    res.json(
                        {
                            status: false,
                            mensaje: "El usuario no existe "
                        });

                }
            } else {
                res.json(
                    {
                        status: false,
                        mensaje: "Error en el servidor"
                    });

            }
        });
    } else {
        res.json({
            status: false,
            mensaje: "Faltan completar datos"
        });
    }
});



//Funciones
// function esNumero(parametro) {
//     if (!isNaN(parseInt(parametro))) {
//         return false
//     } else {
//         return true
//     }
// }


function verificarToken(req, res, next) {
    const BearerHeader = req.headers['authorization']
    if (typeof BearerHeader !== 'undefined') {
        const bearerToken = BearerHeader.split(" ")[1]
        req.token = bearerToken;
        next();
    } else {
        res.sendStatus(403);
    }
}

module.exports = router;