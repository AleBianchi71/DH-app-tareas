let tareas = require ("./tareas.js")

let accion = process.argv[2];

switch(accion){
    case "listar":
        console.log("Estas son las tareas");
        tareas.listarTareas();
        break;

        case "crear":
            console.log("Estamos creando una tarea nueva");
            const nuevaTarea = {
                titulo: process.argv[3],
                estado: "pendiente"
            };
            tareas.guardarTarea(nuevaTarea);
            console.log("Excelente, otra tarea por hacer");
            break;
        
        case undefined:
            console.log("no entiendo que quieres hacer");
            break;
        
        case "filtrar": 
            const estado = process.argv[3];
            const tareasFiltradas = tareas.filtrarPorEstado(estado);
            console.log("filtrando tareas");
            tareas.listarTareas(tareasFiltradas);
            break;

        default:
            console.log("no mandaste  nada");
            break; 
}
