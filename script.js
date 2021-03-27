var hamburguer = document.querySelector(".hamburguer");

hamburguer.addEventListener("click", function(){
     document.querySelector(".container").classList.toggle("show-menu");
});

document.querySelector("#qtde").addEventListener("change", atualizarpreco)
document.querySelector("#js").addEventListener("change", atualizarpreco)
document.querySelector("#layout-sim").addEventListener("change", atualizarpreco)
document.querySelector("#layout-nao").addEventListener("change", atualizarpreco)
document.querySelector("#prazo").addEventListener("change", function (){
     const prazo = document.querySelector("#prazo").value
     document.querySelector("label[for=prazo]").innerHTML = `Prazo: ${prazo} Semana(s)`
     atualizarpreco ()
})
function atualizarpreco(){
     const qtde = document.querySelector("#qtde").value
     const temJS = document.querySelector("#js").checked
     const incluiLayout = document.querySelector("#layout-sim").checked
     const prazo = document.querySelector("#prazo").value
     let preco = qtde * 100;
     
     if (incluiLayout)   preco += 500
     if (temJS)  preco *= 1.1 // o * 1.1 é a msm coisa de fazer 'preco = preco + (preco*(10/100)) e o '*=' é a mesma coisa de 'preco = preco *' 
     
     let taxaUrgencia = 1 - prazo * 0.1;
     preco *= 1 + taxaUrgencia   
     document.querySelector("#preco").innerHTML = "R$" + preco.toFixed(2)
}         