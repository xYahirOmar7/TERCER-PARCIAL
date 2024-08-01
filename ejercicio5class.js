function mostrarSeleccion() {
    const formulario = document.getElementById('miFormulario');
    const cocheSeleccionado = formulario.elements['coche'];
    const coloresSeleccionados = formulario.elements['color'];

    let coche = '';
    for (const radio of cocheSeleccionado) {
        if (radio.checked) {
            coche = radio.value;
            break;
        }
    }

    let colores = [];
    for (const checkbox of coloresSeleccionados) {
        if (checkbox.checked) {
            colores.push(checkbox.value);
        }
    }

    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `<p>Coche seleccionado: ${coche}</p>
                              <p>Colores seleccionados: ${colores.join(', ')}</p>`;
}