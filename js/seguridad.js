// ==============================================================================
// 1. CONTROL DE SESIÓN (Ejecución inmediata de seguridad)
// ==============================================================================
const nombre = localStorage.getItem("nomUsuario");
const rol = localStorage.getItem("rolUsuario");

// Si no hay usuario en la memoria, lo enviamos directamente a la pantalla de error
if (!nombre || nombre === "") {
    window.location.href = "error.html";
}

// ==============================================================================
// 2. CARGA DE DATOS Y RESTRICCIONES VISUALES (Al cargar el HTML)
// ==============================================================================
document.addEventListener("DOMContentLoaded", function () {
    
    // Solo intentamos cargar el menú si el usuario pasó el filtro de arriba
    if (nombre) {
        const verificarSidebar = setInterval(function () {
            const divUsuario = document.getElementById("txtNombreUsuario");
            const divRol = document.getElementById("txtRolUsuario");

            // Cuando el sidebar por fin cargue, le inyectamos los datos y aplicamos restricciones
            if (divUsuario && divRol) {
                clearInterval(verificarSidebar);
                divUsuario.textContent = nombre;
                divRol.textContent = rol;
                aplicarRestricciones(rol);
            }
        }, 100);
    }

    function aplicarRestricciones(rol) {
        console.log("Ejecutando lógica de permisos para el rol: " + rol);
        
        // Identificar elementos por id 
        const mantenimiento = document.getElementById("menuMantenimiento");
        const compras = document.getElementById("menuCompras");
        const addons = document.getElementById("seccionAddons");
        const tablas = document.getElementById("menuTables");
        
        // Lógica de permisos
        if (rol === "Ventas") {
            const btnConfig = document.getElementById("menuConfiguracion");
            if (btnConfig) btnConfig.style.display = "none";
            if (addons) addons.style.display = "none";
        }
        
        if (rol === "Deposito") {
            // El depósito no ve mantenimiento, pero sí compras y tablas de stock
            if (mantenimiento) mantenimiento.style.display = "none";
        }
    }
});