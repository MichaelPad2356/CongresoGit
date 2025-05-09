// Array de datos
const nombres = [
    { id: 261177, nombre: "Cesar" },
    { id: 260982, nombre: "Robert" },
    { id: 261066, nombre: "Axel Daniel" },
    { id: 336248, nombre: "Ahylin Aketzali Castorena Rodriguez" },
    { id: 336446, nombre: "Michael Giovanny Miguel Padilla" },
    {id: 261740, nombre: "Rubén Eduardo Dávila Flores" },
];

// Referencia al cuerpo de la tabla
const tablaNombres = document.getElementById("tabla-nombres");

// Generar dinámicamente las filas
nombres.forEach(persona => {
    const fila = document.createElement("tr");
    fila.innerHTML = `
        <td>${persona.id}</td>
        <td>${persona.nombre}</td>
    `;
    tablaNombres.appendChild(fila);
});