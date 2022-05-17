function verificar() {
  let anoAtual = new Date().getFullYear();
  let anoNascimentoForm = document.getElementById("txtano");
  let resultado = document.querySelector("div#resultado");
  

  if (
    anoNascimentoForm.value.length == 0 ||
    anoNascimentoForm.value > anoAtual
  ) {
    alert("[ERRO] Verifique os dados e tente novamente!");
  } else {
    let formSexo = document.getElementsByName("radsex");
    let idade = (anoAtual - Number(anoNascimentoForm.value));
    let genero = "";
    let img = document.createElement ("img");
    let formSexoC = formSexo[0].checked;
    img.setAttribute("id", "imagem")

    if (formSexoC){
        if (idade >= 0 && idade <= 4) {
          genero = "Bebê"
        }
        img.setAttribute("src","./assets/bebe-f.png");
    } else {
        genero = "Bebê"
        img.setAttribute("src","./assets/bebe-m.png");
    }

    if (formSexoC){
      if (idade > 5 && idade <= 12) {
        genero = "Criança"
      }
      img.setAttribute("src","./assets/crianca-f.png");
  } else {
      genero = "Criança"
      img.setAttribute("src","./assets/crianca-m.png");
  }
        resultado.innerHTML = `Idade: ${genero} com ${idade} anos`;
        resultado.appendChild(img);
  }
}/
if (formSexoC){
  if (idade > 13 && idade <= 18) {
    genero = "Jovem"
  }
  img.setAttribute("src","./assets/jovem-f.png");
} else {
  genero = "Jovem"
  img.setAttribute("src","./assets/jovem-m.png");
}
    resultado.innerHTML = `Idade: ${genero} com ${idade} anos`;
    resultado.appendChild(img);


  if (formSexoC){
    if (idade > 20 && idade <= 59) {
      genero = "adulto"
    }
    img.setAttribute("src","./assets/adulto-f.png");
  } else {
    genero = "adulto"
    img.setAttribute("src","./assets/adulto-m.png");
  }
      resultado.innerHTML = `Idade: ${genero} com ${idade} anos`;
      resultado.appendChild(img);

      if (formSexoC){
        if (idade > 20 && idade <= 59) {
          genero = "idoso"
        }
        img.setAttribute("src","./assets/idoso-f.png");
      } else {
        genero = "idoso"
        img.setAttribute("src","./assets/idoso-m.png");
      }
          resultado.innerHTML = `Detectamos: ${genero} com ${idade} anos`;
          resultado.appendChild(img);
         