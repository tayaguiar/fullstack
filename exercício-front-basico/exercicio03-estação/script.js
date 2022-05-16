function carregar() {
    let mensagem = document.getElementById("container-msg");
    let imagem = document.getElementById("img");

    let data = new Date();
    let mes = data.getMonth()+1;

    let estacao = "";  
    
    
    if (mes >=10 && mes <=12) {
        estacao = "primavera";
        imagem.src = "assets/primavera.jpg";
        document.body.style.background = "#034304";

    } else if (mes >=1 && mes <=3) {
      estacao="verão";
      imagem.src = "assets/verao.jpg";
      document.body.style.background = "#6bdbe4";

    } else if (mes >=4 && mes <=6) {
      estacao="outono";
      imagem.src = "assets/outono.jpg";
      document.body.style.background = "#F87F02";

    } else { 
      estacao="inverno";
      imagem.src = "assets/inverno.jpg";
      document.body.style.background = "#8AA8C6";
    }
      mensagem.innerHTML = `A estação atual é ${estacao}.`;
    
}
