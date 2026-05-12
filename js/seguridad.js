document.addEventListener("DOMContentLoaded", function () {
    const nombre = localStorage.getItem("nomUsuario");
    const rol = localStorage.getItem("rolUsuario");

    if (!nombre) {
        window.location.href = "index.html"; // O error.html
        return;
    }

    const verificarSidebar = setInterval(function () {
        const divUsuario = document.getElementById("txtNombreUsuario");
        const divRol = document.getElementById("txtRolUsuario");

        if (divUsuario && divRol) {
            clearInterval(verificarSidebar);
            divUsuario.textContent = nombre;
            divRol.textContent = rol;
            aplicarRestricciones(rol);
        }
    }, 100);

    function aplicarRestricciones(rol) {
        console.log("Ejecutando logica de permisos para: "+rol);
        //Identificar elementos por id 
        const mantenimiento = document.getElementById("menuMantenimiento");
        const compras = document.getElementById("menuCompras");
        const addons = document.getElementById("seccionAddons");
        const tablas = document.getElementById("menuTables");
        // Aquí centralizaremos todo lo que se oculta
        if (rol === "Ventas") {
            const btnConfig = document.getElementById("menuConfiguracion");
            if (btnConfig) btnConfig.style.display = "none";
            //if (mantenimiento) mantenimiento.style.display = "none";
            if (addons) addons.style.display = "none";
        }
        if (rol === "Deposito") {
        // El depósito no ve mantenimiento, pero sí compras y tablas de stock
        if (mantenimiento) mantenimiento.style.display = "none";
        }
    }
});
(function() {
    const usuarioSesion = JSON.parse(localStorage.getItem("userLogin"));
    
    // Si no hay sesión o el usuario no tiene permisos (ej. no es Administrador)
    if (!usuarioSesion || usuarioSesion.rol !== "Administrador") {
        window.location.href = "error.html";
    }
})();