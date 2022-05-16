function carregar() {
    let mensagem = document.getElementById("container-msg");
    let imagem = document.getElementById("img");

    let data = new Date();
    let hora = data.getHours();

      mensagem.innerHTML = `Agora são ${hora} horas.`;
    
    if (hora >0 && hora <12) {
        //manha
        imagem.src = "assets/manha.jpg";
        document.body.style.background = "#034304";

    } else if (hora >=12 && hora <=18) {
      //tarde
      imagem.src = "assets/tarde.jpg";
      document.body.style.background = "#F87F02";

    } else { 
      //noite
      imagem.src = "assets/noite.jpg";
      document.body.style.background = "#012043";
    }
}