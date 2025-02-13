let amigos = [];

function agregarAmigo() {
    let amigoIngresado = document.getElementById('amigo').value;

    if (amigoIngresado === '') {
        alert('Debe agregar un nombre');
    } else {
        amigos.push(amigoIngresado);
        document.getElementById('amigo').value = '';
        actualizarLista();
    }
}

function actualizarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    amigos.forEach(amigo => {
        let li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert('No hay amigos en la lista para sortear');
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];

    // Vaciar la lista de amigos
    amigos = [];

    // Mostrar solo el amigo sorteado en la lista
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = ''; 

    let li = document.createElement('li');
    li.textContent = `El amigo sorteado es: ${amigoSorteado}`;
    li.style.fontWeight = 'bold';
    lista.appendChild(li);
}
