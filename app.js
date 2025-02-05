// Declarar el array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const inputAmigo = document.getElementById("amigo");
    const nombre = inputAmigo.value.trim(); // Eliminar espacios en blanco al inicio y al final

    // Validar que el campo no esté vacío
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    // Agregar el nombre al array
    amigos.push(nombre);

    // Limpiar el campo de entrada
    inputAmigo.value = "";

    // Actualizar la lista en pantalla
    actualizarLista();
}

// Función para actualizar la lista en el HTML
function actualizarLista() {
    const listaAmigos = document.getElementById("listaAmigos");

    // Limpiar la lista antes de actualizarla
    listaAmigos.innerHTML = "";

    // Recorrer el array y agregar cada amigo como un <li>
    amigos.forEach((amigo) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

// Función para sortear un amigo al azar y reiniciar la lista
function sortearAmigo() {
    const resultado = document.getElementById("resultado");

    // Validar que haya al menos un amigo en la lista
    if (amigos.length === 0) {
        alert("Agrega al menos un amigo antes de sortear.");
        return;
    }

    // Generar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtener el nombre sorteado
    const amigoSorteado = amigos[indiceAleatorio];

    // Mostrar el resultado en pantalla con estilo similar al de la imagen
    resultado.innerHTML = `<p style="color: green; font-size: 1.2rem; font-weight: bold;">El amigo secreto sorteado es: <span style="color: black;">${amigoSorteado}</span></p>`;

    // Reiniciar la lista y el array
    amigos = [];
    actualizarLista();
}