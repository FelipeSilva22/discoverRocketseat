function toggleMode() {
  const html = document.documentElement
  /*
  if (html.classList.contains("light")) {
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  }
*/
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img")
  //Substituir a imagem
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar2.png")
    img.setAttribute("alt", '"Foto de Felipe Josuel com fundo claro"')
  } else {
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute("alt", '"Foto de Felipe Josuel com fundo iluminado"')
  }
  //se tiver light mode, adicionar a img light
  //se não tiver light mode, manter a img normal
}
