function datos(){
    // CREAR UN ARRAY de objetos: usuarios---------------------------------------------
    var usuarios = [
        {
            idusuario: 1,
            cedula: "6350950",
            nombre: "Luis Aranda",
            rol: "Administrador",
            celular: "0971-123456",
            usuario: "Luis",
            contrasena: "luis123"
        },
        {
            idusuario: 1,
            cedula: "655950",
            nombre: "Samuel Parcero",
            rol: "Administrador",
            celular: "0971-123456",
            usuario: "Samuel",
            contrasena: "samuel123"
        },
        {
            idusuario: 2,
            cedula: "7250909",
            nombre: "Pedro Romero",
            celular: "0971-001100",
            usuario: "Pedro",
            rol: "Cajero",
            contrasena: "Pedro12"
        },
        {
            idusuario: 3,
            cedula: "556677",
            nombre: "Austin Post",
            rol: "Gerente",
            celular: "0972-220022",
            usuario: "Austin",
            contrasena: "posty90"
        },
        {
            idusuario: 4,
            cedula: "6590456",
            nombre: "Alondra",
            rol: "Programador",
            usuario: "Alondra",
            contrasena: "alon1234",
            celular: "0985455620"
        },
        {
            idusuario: 5,
            cedula: "4850123",
            nombre: "Maria Gimenez",
            rol: "Ventas",
            celular: "0981-555666",
            usuario: "MariaG",
            contrasena: "maria2026"
        },
        {
            idusuario: 6,
            cedula: "5980777",
            nombre: "Carlos Ferreira",
            rol: "Cajero",
            celular: "0994-112233",
            usuario: "Carlos",
            contrasena: "car12345"
        },
        {
            idusuario: 7,
            cedula: "3950444",
            nombre: "Elena Benitez",
            rol: "Administrador",
            celular: "0975-888999",
            usuario: "ElenaB",
            contrasena: "admin77"
        },
        {
            idusuario: 8,
            cedula: "6120888",
            nombre: "Jorge Ortiz",
            rol: "Deposito",
            celular: "0983-445566",
            usuario: "JorgeO",
            contrasena: "jorge_depo"
        },
        {
            idusuario: 9,
            cedula: "7430111",
            nombre: "Sofia Rojas",
            rol: "Ventas",
            celular: "0971-990011",
            usuario: "SofiaR",
            contrasena: "sofia987"
        },
        {
            idusuario: 10,
            cedula: "5210666",
            nombre: "Ricardo Galeano",
            rol: "Contador",
            celular: "0992-334455",
            usuario: "Ricardo",
            contrasena: "ricky2026"
        }
    ];
    // Guardar en localStorage como cadena JSON
    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    // CREAR UN ARRAY de objetos: proveedores-----------------------------------------
    var proveedores = [
        {
            idproveedor: 1,
            ruc: "1234567-0",
            tabla_proveedores: "DISTRIBUIDORA TEXTIL DEL NORTE",
            direccion: "AV. AGUSTÍN FERNANDO DE PINEDO C/ ITURBE",
            telefono: "0331-240123",
            ciudad: "CONCEPCIÓN"
        },
        {
            idproveedor: 2,
            ruc: "5400300-1",
            tabla_proveedores: "MODAS LUZ S.A. (MAYORISTA)",
            direccion: "ADRIÁN JARA Y BOQUERÓN",
            telefono: "0971-102030",
            ciudad: "CIUDAD DEL ESTE"
        },
        {
            idproveedor: 3,
            ruc: "801234567-1",
            tabla_proveedores: "FASHION VIP IMPORTACIONES",
            direccion: "AV. DR. FRANCIA ESQ. NACIONES UNIDAS",
            telefono: "0981-302010",
            ciudad: "PEDRO JUAN CABALLERO"
        },
        {
            idproveedor: 4,
            ruc: "80022334-1",
           tabla_proveedores: "TEXTIL GUAIREÑA S.A.",
            direccion: "AV. MARISCAL LÓPEZ ESQ. LIBERTAD",
            telefono: "021-550660",
            ciudad: "ASUNCIÓN"
        },
        {
            idproveedor: 5,
            ruc: "4850900-2",
            tabla_proveedores: "MODAS DEL ESTE IMPORT-EXPORT",
            direccion: "AV. SAN BLAS KM 1.5",
            telefono: "0961-445500",
            ciudad: "CIUDAD DEL ESTE"
        },
        {
            idproveedor: 6,
            ruc: "80011223-0",
            tabla_proveedores: "BOUTIQUE MAYORISTA CONCEPCIÓN",
            direccion: "CURUPAYTY C/ MCAL. ESTIGARRIBIA",
            telefono: "0331-240800",
            ciudad: "CONCEPCIÓN"
        },
        {
            idproveedor: 7,
            ruc: "5566443-8",
            tabla_proveedores: "CALZADOS Y ACCESORIOS EL SOL",
            direccion: "GRAL. ROA 415",
            telefono: "0982-304050",
            ciudad: "ENCARNACIÓN"
        },
        {
            idproveedor: 8,
            ruc: "80099887-5",
            tabla_proveedores: "PROVEEDORA TEXTIL S.R.L.",
            direccion: "RUTA PY05 KM 2",
            telefono: "0331-242000",
            ciudad: "CONCEPCIÓN"
        },
        {
            idproveedor: 9,
            ruc: "1250600-4",
            tabla_proveedores: "ALONDRA FASHION GROUP",
            direccion: "SHOPPING ZUNI LOCAL 12",
            telefono: "0973-112233",
            ciudad: "CIUDAD DEL ESTE"
        },
        {
            idproveedor: 10,
            ruc: "80044556-9",
            tabla_proveedores: "TELARES DEL SUR",
            direccion: "AV. IRRAZÁBAL ESQ. CABAÑAS",
            telefono: "071-205500",
            ciudad: "ENCARNACIÓN"
        }
    ];
    localStorage.setItem("proveedores", JSON.stringify(proveedores));

    // CREAR UN ARRAY de objetos: marcas----------------------------------------------
    var marcas = [
     {
            idmarca: 1,
            marca: "ZARA"
        },
        {
            idmarca: 2,
            marca: "NIKE"
        },
        {
            idmarca: 3,
            marca: "ADIDAS"
        },
        {
            idmarca: 4,
            marca: "LEVI'S"
        },
        {
            idmarca: 5,
            marca: "H&M"
        },
        {
            idmarca: 6,
            marca: "GUCCI"
        },
        {
            idmarca: 7,
            marca: "TOMMY HILFIGER"
        },
        {
            idmarca: 8,
            marca: "CALVIN KLEIN"
        },
        {
            idmarca: 9,
            marca: "PUMA"
        },
        {
            idmarca: 10,
            marca: "LACOSTE"
        },
        {
            idmarca: 11,
            marca: "DIESEL"
        },
        {
            idmarca: 12,
            marca: "COLUMBIA"
        },
        {
            idmarca: 13,
            marca: "UNDER ARMOUR"
        },
        {
            idmarca: 14,
            marca: "GUESS"
        },
        {
            idmarca: 15,
            marca: "FOREVER 21"
        }
    ];
    localStorage.setItem("marcas", JSON.stringify(marcas));
    // CREAR UN ARRAY de objetos: clasificaciones-------------------------------------
    var clasificaciones = [
        {
            idclasificacion: 1,
            clasificacion: "REMERAS"
        },
        {
            idclasificacion: 2,
            clasificacion: "PANTALONES"
        },
        {
            idclasificacion: 3,
            clasificacion: "JEANS"
        },
        {
            idclasificacion: 4,
            clasificacion: "CAMISAS"
        },
        {
            idclasificacion: 5,
            clasificacion: "BLUSAS"
        },
        {
            idclasificacion: 6,
            clasificacion: "CAMPERAS"
        },
        {
            idclasificacion: 7,
            clasificacion: "VESTIDOS"
        },
        {
            idclasificacion: 8,
            clasificacion: "CALZADOS"
        },
        {
            idclasificacion: 9,
            clasificacion: "BERMUDAS"
        },
        {
            idclasificacion: 10,
            clasificacion: "SACOS"
        }
    ];
    localStorage.setItem("clasificaciones", JSON.stringify(clasificaciones));

    // CREAR UN ARRAY de objetos: articulos-------------------------------------------
var articulos = [
    {
        idarticulo: 1,
        codbarra: "7891011121314",
        descripcion: "REMERA ALGODÓN SLIM FIT",
        idmarca: 1,
        nom_marca: "ZARA",
        idclasificacion: 1,
        nom_clasificacion: "REMERAS",
        tiva: 10,
        stockactual: 50,
        preventa: 85000,
        costo: 50000
    },
    {
        idarticulo: 2,
        codbarra: "7891011121315",
        descripcion: "JEAN SKINNY BLUE DARK",
        idmarca: 4,
        nom_marca: "LEVI'S",
        idclasificacion: 3,
        nom_clasificacion: "JEANS",
        tiva: 10,
        stockactual: 30,
        preventa: 250000,
        costo: 350000
    },
    {
        idarticulo: 3,
        codbarra: "7891011121316",
        descripcion: "CAMISA FORMAL BLANCA",
        idmarca: 7,
        nom_marca: "TOMMY HILFIGER",
        idclasificacion: 4,
        nom_clasificacion: "CAMISAS",
        tiva: 10,
        stockactual: 25,
        preventa: 180000,
        costo: 120000
    },
    {
        idarticulo: 4,
        codbarra: "7891011121317",
        descripcion: "CAMPERA DE CUERO NEGRA",
        idmarca: 11,
        nom_marca: "DIESEL",
        idclasificacion: 6,
        nom_clasificacion: "CAMPERAS",
        tiva: 10,
        stockactual: 12,
        preventa: 450000,
        costo: 500000
    },
    {
        idarticulo: 5,
        codbarra: "7891011121318",
        descripcion: "VESTIDO DE FIESTA LARGO",
        idmarca: 14,
        nom_marca: "GUESS",
        idclasificacion: 7,
        nom_clasificacion: "VESTIDOS",
        tiva: 10,
        stockactual: 8,
        preventa: 380000,
        costo: 350000
    },
    {
        idarticulo: 6,
        codbarra: "7891011121319",
        descripcion: "CHOMBA PIQUÉ CLÁSICA",
        idmarca: 10,
        nom_marca: "LACOSTE",
        idclasificacion: 1,
        nom_clasificacion: "REMERAS",
        tiva: 10,
        stockactual: 40,
        preventa: 120000,
        costo: 200000
    },
    {
        idarticulo: 7,
        codbarra: "7891011121320",
        descripcion: "DEPORTIVA RUNNING AIR",
        idmarca: 2,
        nom_marca: "NIKE",
        idclasificacion: 8,
        nom_clasificacion: "CALZADOS",
        tiva: 10,
        stockactual: 20,
        preventa: 550000,
        costo: 240000
    },
    {
        idarticulo: 8,
        codbarra: "7891011121321",
        descripcion: "BERMUDA CARGO GABARDINA",
        idmarca: 3,
        nom_marca: "ADIDAS",
        idclasificacion: 9,
        nom_clasificacion: "BERMUDAS",
        tiva: 10,
        stockactual: 15,
        preventa: 95000,
        costo: 150000
    },
    {
        idarticulo: 9,
        codbarra: "7891011121322",
        descripcion: "BLUSA SEDA ESTAMPADA",
        idmarca: 5,
        nom_marca: "H&M",
        idclasificacion: 5,
        nom_clasificacion: "BLUSAS",
        tiva: 10,
        stockactual: 22,
        preventa: 110000,
        costo: 200000
    },
    {
        idarticulo: 10,
        codbarra: "7891011121323",
        descripcion: "SACO DE VESTIR SLIM",
        idmarca: 8,
        nom_marca: "CALVIN KLEIN",
        idclasificacion: 10,
        nom_clasificacion: "SACOS",
        tiva: 10,
        stockactual: 5,
        preventa: 750000,
        costo: 500000
    }
];
    //localStorage.setItem("articulos", JSON.stringify(articulos));
    localStorage.setItem("articulos", JSON.stringify(articulos));

    // CREAR UN ARRAY de objetos: compras---------------------------------------------
   // CREAR UN ARRAY de objetos: compras---------------------------------------------
    
    // AQUÍ ESTÁ EL SEGURO PARA NO BORRAR TUS DATOS NUEVOS
    if (!localStorage.getItem("comprascabecera")) {
        
        var comprascabecera = [
            {
                idcompra: 1,
                idproveedor: 1, 
                numfactura: "001-001-0004567",
                timbrado: "11223344",
                feccompra: "2026-05-10", 
                condicion: "CONTADO",
                stexenta: 0,
                stiva5: 0,        
                stiva10: 900000,  
                totcompra: 900000,
                liqiva5: 0,
                liqiva10: 81818,  
                totiva: 81818,
                saldo: 0,
                anulado: "NO"
            },
            {
                idcompra: 2,
                idproveedor: 2, // MODAS LUZ S.A.
                numfactura: "001-002-0008899",
                timbrado: "99887766",
                feccompra: "2026-05-12",
                condicion: "CRÉDITO", // Esta sí aparecerá en tu gestión de vencimientos
                stexenta: 0,
                stiva5: 0,
                stiva10: 1600000,
                totcompra: 1600000,
                liqiva5: 0,
                liqiva10: 145455, 
                totiva: 145455,
                saldo: 1600000,   
                anulado: "NO"
            }
        ];
        var comprasdetalle = [
            // Detalles Compra 1
            { idcompradet: 1, idcompra: 1, item: 1, idarticulo: 2, cantidad: 2, preuni: 250000, tiva: 10, subtotal: 500000 },
            { idcompradet: 2, idcompra: 1, item: 2, idarticulo: 1, cantidad: 4, preuni: 100000, tiva: 10, subtotal: 400000 },
            // Detalles Compra 2
            { idcompradet: 3, idcompra: 2, item: 1, idarticulo: 3, cantidad: 5, preuni: 120000, tiva: 10, subtotal: 600000 },
            { idcompradet: 4, idcompra: 2, item: 2, idarticulo: 10, cantidad: 2, preuni: 500000, tiva: 10, subtotal: 1000000 }
        ];

        // Guardar en localStorage como cadena JSON
        localStorage.setItem("comprascabecera", JSON.stringify(comprascabecera));
        localStorage.setItem("comprasdetalle", JSON.stringify(comprasdetalle));
    }
    //---------------------------------------------------------------------------------
    //---------------------------------------------------------------------------------

    // CREAR UN ARRAY de objetos: clientes-----------------------------------------
    var clientes = [
        {
            idcliente: 1,
            cedula: "4567890",
            nombre: "JUAN PEREZ",
            celular: "0981-123456",
            direccion: "CALLE FALSA 123",
            ciudad: "ASUNCIÓN"
        },
        {
            idcliente: 2,
            cedula: "3456789",
            nombre: "MARIA GONZALEZ",
            celular: "0971-987654",
            direccion: "AVENIDA MARISCAL LOPEZ 45",
            ciudad: "CIUDAD DEL ESTE"
        },
        {
            idcliente: 3,
            cedula: "5678901",
            nombre: "CARLOS GOMEZ",
            celular: "0991-456789",
            direccion: "RUTA 1 KM 15",
            ciudad: "SAN LORENZO"
        },
        {
            idcliente: 4,
            cedula: "2345678",
            nombre: "ANA MARTINEZ",
            celular: "0982-112233",
            direccion: "BARRIO OBRERO",
            ciudad: "PEDRO JUAN CABALLERO"
        },
        {
            idcliente: 5,
            cedula: "6789012",
            nombre: "LUIS RAMIREZ",
            celular: "0972-334455",
            direccion: "AV. AGUSTÍN FERNANDO DE PINEDO",
            ciudad: "CONCEPCIÓN"
        },
        {
            idcliente: 6,
            cedula: "1234567",
            nombre: "CARMEN LOPEZ",
            celular: "0992-556677",
            direccion: "CENTRO HISTORICO",
            ciudad: "ENCARNACIÓN"
        },
        {
            idcliente: 7,
            cedula: "7890123",
            nombre: "ROBERTO FERNANDEZ",
            celular: "0983-778899",
            direccion: "AV. SAN MARTIN",
            ciudad: "ASUNCIÓN"
        },
        {
            idcliente: 8,
            cedula: "8901234",
            nombre: "LAURA SOSA",
            celular: "0973-990011",
            direccion: "BARRIO LAS CARMELITAS",
            ciudad: "ASUNCIÓN"
        },
        {
            idcliente: 9,
            cedula: "9012345",
            nombre: "DIEGO CABALLERO",
            celular: "0993-223344",
            direccion: "CALLE PALMA 456",
            ciudad: "ASUNCIÓN"
        },
        {
            idcliente: 10,
            cedula: "1122334",
            nombre: "SARA BENITEZ",
            celular: "0984-556677",
            direccion: "AV. IRRAZABAL",
            ciudad: "ENCARNACIÓN"
        }
    ];
    localStorage.setItem("clientes", JSON.stringify(clientes));
}