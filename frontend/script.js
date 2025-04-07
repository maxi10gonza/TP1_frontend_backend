function enviarNombre() {
    const nombre = document.getElementById('nombre').value;

    fetch(`http://localhost:3000/saludo/${nombre}`)
        .then(response => response.text())
        .then(data => {
            document.getElementById('mensaje').textContent = data;
    })
    .catch(error => {
        console.error('Error:', error);
    });
}
