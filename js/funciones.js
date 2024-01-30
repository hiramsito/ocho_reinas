var reinasPorColocar = 8;
var reinasColocadas = 0;

function colocarReina(celda) {
  if (window.getComputedStyle(celda).backgroundImage == "none") {
    if (reinasColocadas < 8) {
      celda.style =
        "background-image: url(./img/reina3.png); background-size:cover;";
      celda.classList.add("reina");
      marcarAtaques(celda, true);
      reinasPorColocar--;
      reinasColocadas++;
      cambiarImagenReina(tipoReinaActual); // Llamar a cambiarImagenReina() después de colocar una nueva reina
    }
  } else {
    // Si ya hay una reina en esta celda, quitamos la reina y restauramos el estilo de las celdas atacadas
    celda.style = ""; // Restablecer estilo de la celda
    celda.classList.remove("reina");
    marcarAtaques(celda, false);
    reinasPorColocar++;
    reinasColocadas--;
    cambiarImagenReina(tipoReinaActual); // Llamar a cambiarImagenReina() después de quitar una reina
  }
  document.getElementById("reinasColoca").innerHTML =
    "Reinas por colocar: " + reinasPorColocar;
  document.getElementById("reinasColoca1").innerHTML =
    "Reinas Colocadas: " + reinasColocadas;
}

var tipoReinaActual = "./img/reina.png"; // En esta variable guardamos la dirección de la imagen

function cambiarImagenReina(nuevaImagen) {
  tipoReinaActual = nuevaImagen; 

  // Actualiza la imagen de todas las celdas
  var todasLasCeldas = document.querySelectorAll("td");
  todasLasCeldas.forEach(function (celda) {
    if (celda.classList.contains("reina")) {
      celda.style.backgroundImage = "url(" + tipoReinaActual + ")";
    }
  });
}

function reiniciarTablero() {
  // Restablecer todas las celdas del tablero
  var todasLasCeldas = document.querySelectorAll("td");
  todasLasCeldas.forEach(function (celda) {
    celda.style.backgroundImage = "none"; // Eliminar la imagen de fondo
    celda.classList.remove("reina"); // Eliminar la clase de reina si está presente
    celda.classList.remove("no-click"); // Eliminar cualquier clase de celda bloqueada
    celda.style.backgroundColor = ""; // Restablecer el color de fondo de la celda
  });

  // Restablecer variables de estado del juego
  reinasPorColocar = 8;
  reinasColocadas = 0;

  // Actualizar los contadores de reinas
  document.getElementById("reinasColoca").innerHTML = "Reinas por colocar: " + reinasPorColocar;
  document.getElementById("reinasColoca1").innerHTML = "Reinas Colocadas: " + reinasColocadas;
}

function marcarAtaques(celda, colocar) {
  var renglon = celda.parentElement.rowIndex;
  var columna = celda.cellIndex;
  var tablero = document.getElementById("tabla");

  // Marcar/Desmarcar renglones y columnas
  for (let i = 0; i < 8; i++) {
    if (i !== columna) {
      if (colocar) {
        if (!tablero.rows[renglon].cells[i].style.backgroundColor) {
          // Verifica si la celda no está ocupada por una reina
          tablero.rows[renglon].cells[i].classList.add("no-click");
          tablero.rows[renglon].cells[i].style.backgroundColor = "#ff0000";
        }
      } else {
        tablero.rows[renglon].cells[i].classList.remove("no-click");
        tablero.rows[renglon].cells[i].style.backgroundColor = "";
      }
    }

    if (i !== renglon) {
      if (colocar) {
        if (!tablero.rows[i].cells[columna].style.backgroundColor) {
          // Verifica si la celda no está ocupada por una reina
          tablero.rows[i].cells[columna].classList.add("no-click");
          tablero.rows[i].cells[columna].style.backgroundColor = "#ff0000";
        }
      } else {
        tablero.rows[i].cells[columna].classList.remove("no-click");
        tablero.rows[i].cells[columna].style.backgroundColor = "";
      }
    }
  }

  // Marcar/Desmarcar diagonales
  var r, c;

  // Diagonal hacia arriba y derecha
  // Diagonal hacia arriba y derecha
  r = renglon;
  c = columna;
  while (r >= 0 && c < 8) {
    if (colocar) {
      tablero.rows[r].cells[c].style.backgroundColor = "#ff0000";
    } else {
      tablero.rows[r].cells[c].classList.remove("no-click");
      tablero.rows[r].cells[c].style.backgroundColor = "";
    }
    r--;
    c++;
  }

  // Diagonal hacia abajo y derecha
  r = renglon;
  c = columna;
  while (r < 8 && c < 8) {
    if (colocar) {
      tablero.rows[r].cells[c].style.backgroundColor = "#ff0000";
    } else {
      tablero.rows[r].cells[c].classList.remove("no-click");
      tablero.rows[r].cells[c].style.backgroundColor = "";
    }
    r++;
    c++;
  }

  // Diagonal hacia arriba e izquierda
  r = renglon;
  c = columna;
  while (r >= 0 && c >= 0) {
    if (colocar) {
      tablero.rows[r].cells[c].style.backgroundColor = "#ff0000";
    } else {
      tablero.rows[r].cells[c].classList.remove("no-click");
      tablero.rows[r].cells[c].style.backgroundColor = "";
    }
    r--;
    c--;
  }

  // Diagonal hacia abajo e izquierda
  r = renglon;
  c = columna;
  while (r < 8 && c >= 0) {
    if (colocar) {
      tablero.rows[r].cells[c].style.backgroundColor = "#ff0000";
    } else {
      tablero.rows[r].cells[c].classList.remove("no-click");
      tablero.rows[r].cells[c].style.backgroundColor = "";
    }
    r++;
    c--;
  }
}

function solucion1(valor) {
  var celdas = document.getElementById("tabla");

  switch (valor) {
    case "1":
      celdas.rows[0].cells[3].style =
        "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[1].cells[6].style =
        "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[2].cells[2].style =
        "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[3].cells[7].style =
        "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[4].cells[1].style =
        "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[5].cells[4].style =
        "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[6].cells[0].style =
        "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[7].cells[5].style =
        "background-image: url(./img/reina.png); background-size:cover;";
      break;

    case "2":
      celdas.rows[0].cells[4].style =
        "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[1].cells[1].style =
        "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[2].cells[3].style =
        "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[3].cells[6].style =
        "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[4].cells[2].style =
        "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[5].cells[7].style =
        "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[6].cells[5].style =
        "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[7].cells[0].style =
        "background-image: url(./img/reina.png); background-size:cover;";
      break;

    case "3":
      celdas.rows[0].cells[3].style =
        "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[1].cells[1].style =
        "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[2].cells[6].style =
        "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[3].cells[2].style =
        "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[4].cells[5].style =
        "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[5].cells[7].style =
        "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[6].cells[4].style =
        "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[7].cells[0].style =
        "background-image: url(./img/reina.png); background-size:cover;";
      break;

    case "4":
      celdas.rows[0].cells[3].style =
        "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[1].cells[5].style =
        "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[2].cells[7].style =
        "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[3].cells[2].style =
        "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[4].cells[0].style =
        "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[5].cells[6].style =
        "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[6].cells[4].style =
        "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[7].cells[1].style =
        "background-image: url(./img/reina.png); background-size:cover;";
      break;

    case "5":
      celdas.rows[0].cells[2].style =
        "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[1].cells[5].style =
        "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[2].cells[7].style =
        "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[3].cells[0].style =
        "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[4].cells[3].style =
        "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[5].cells[6].style =
        "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[6].cells[4].style =
        "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[7].cells[1].style =
        "background-image: url(./img/reina.png); background-size:cover;";
      break;

    case "6":
      celdas.rows[0].cells[4].style =
        "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[1].cells[2].style =
        "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[2].cells[7].style =
        "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[3].cells[3].style =
        "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[4].cells[6].style =
        "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[5].cells[0].style =
        "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[6].cells[5].style =
        "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[7].cells[1].style =
        "background-image: url(./img/reina.png); background-size:cover;";
      break;

    default:
      alert("Esa solucion no te la ando manejando");
      break;
  }
}
