let oscuro = false;

function modoOscuro() {
  oscuro = !oscuro;

  document.body.style.background = oscuro ? "#111" : "#f5f5f5";
  document.querySelector(".card").style.background = oscuro ? "#1e1e1e" : "white";
  document.querySelector(".card").style.color = oscuro ? "white" : "black";
}
