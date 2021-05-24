const barras = document.getElementById("barras"),
 btn = document.getElementById("btn-none"),
 navbar = document.querySelector(".navbar"),
 header = document.getElementById("header"),
 listItem = document.querySelectorAll('.list-item')

barras.addEventListener("click", () => {
  navbar.classList.toggle("activo");

  if (navbar.classList.contains("activo")) {
    barras.classList.add("activo");
    btn.style.display = "none";
    header.style.background = "rgba(0,0,0,.6)";
    listItem.forEach(item => {
      item.classList.add('activo');
    });
  } else {
    barras.classList.remove("activo");
    btn.style.display = "inline-block";
    header.style.background = "none";
    listItem.forEach(item => {
      item.classList.remove('activo');
    });
  }
});
