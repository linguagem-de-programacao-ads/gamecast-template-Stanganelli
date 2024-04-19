async function buscar(){
    console.log("oi")
    const resposta = await fetch("https://66186ae29a41b1b3dfbd03fe.mockapi.io/gamecast/agendas")

    const respostaDados = await resposta.json()


    console.log("reesposta real: "+respostaDados)

    const cards = document.getElementById("cards_games")

   cards.innerHTML = respostaDados.map((itenAgendado) => {
           return `
           <div class="cardItem">
               <div class="dataGame"> 
                   <img src=""> ${itenAgendado.dataJogo}
               </div>
               <img class="img-background" src="${itenAgendado.urlImagem}" alt="">
               <div class="descricao">
                   <p> <strong>${itenAgendado.nome}</strong> </p>
                   <p>${itenAgendado.descricao} </p>
                   <p><strong>Gamers: </strong></p>

                   <div class="gamers">
                   ${itenAgendado.gamers}
                   </div>

                 
               </div>  
               <div class="assistir">
                       <a class="assistirItem"> <img src="../imagens/youtube.svg" alt=""> Assistir </a>
               </div>
           </div>`
    });
}


buscar() 