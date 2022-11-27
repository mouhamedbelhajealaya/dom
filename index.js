var btnPlus = document.querySelector(".btnPlus");
var count = document.querySelector("#count");
var btnMoins = document.querySelector(".btnMoins");
var total = document.querySelector(".total");
var price = document.querySelector(".price");
var ThePriceOfAllPurchases = document.querySelector(".ThePriceOfAllPurchases");
var nombreProduitDansPanier = document.querySelector(".nombreProduitDansPanier");
var buttonAchetée =  document.querySelector(".buttonAchetée");


btnPlus.addEventListener("click",function () {
    count.innerHTML = parseInt(count.innerHTML) + 1
    total.innerHTML = parseInt(total.innerHTML) + parseInt(price.innerHTML)
    ThePriceOfAllPurchases.innerHTML= parseInt(ThePriceOfAllPurchases.innerHTML) + parseInt(price.innerHTML)
    nombreProduitDansPanier.innerHTML=parseInt(nombreProduitDansPanier.innerHTML) + parseInt(1)
});
btnMoins.addEventListener('click',function(){
    if(parseInt(count.innerHTML) > 0){
        count.innerHTML = parseInt(count.innerHTML) - 1
        total.innerHTML = parseInt(total.innerHTML) - parseInt(price.innerHTML)
        ThePriceOfAllPurchases.innerHTML= parseInt(ThePriceOfAllPurchases.innerHTML) - parseInt(price.innerHTML)
        nombreProduitDansPanier.innerHTML=parseInt(nombreProduitDansPanier.innerHTML) - parseInt(1)
    } 
  });
   if (parseInt(nombreProduitDansPanier.innerHTML) > 0 ){
    var newButton = document.createElement("button");
    var newContent = document.createTextNode('bye');
    newButton.appendChild(newContent);
    var buttonAchetée =  document.querySelector(".buttonAchetée");
    document.body.insertBefore(newButton, buttonAchetée);

   }








var btnPlusProduit2 = document.querySelector(".btnPlusProduit2");
var countProduit2 = document.querySelector("#countProduit2");
var btnMoinsProduit2 = document.querySelector(".btnMoinsProduit2");
var totalProduit2 = document.querySelector(".totalProduit2");
var priceProduit2 = document.querySelector(".priceProduit2");
var nombreProduitDansPanier = document.querySelector(".nombreProduitDansPanier");




btnPlusProduit2.addEventListener("click",function () {
    countProduit2.innerHTML = parseInt(countProduit2.innerHTML) + 1
    totalProduit2.innerHTML = parseInt(totalProduit2.innerHTML) + parseInt(priceProduit2.innerHTML)
    ThePriceOfAllPurchases.innerHTML= parseInt(ThePriceOfAllPurchases.innerHTML) + parseInt(priceProduit2.innerHTML)
    nombreProduitDansPanier.innerHTML=parseInt(nombreProduitDansPanier.innerHTML) + parseInt(1)
});
btnMoinsProduit2.addEventListener('click',function(){
    if(parseInt(countProduit2.innerHTML) > 0){
        countProduit2.innerHTML = parseInt(countProduit2.innerHTML) - 1
        totalProduit2.innerHTML = parseInt(totalProduit2.innerHTML) - parseInt(priceProduit2.innerHTML)
        ThePriceOfAllPurchases.innerHTML= parseInt(ThePriceOfAllPurchases.innerHTML) - parseInt(priceProduit2.innerHTML)
        nombreProduitDansPanier.innerHTML=parseInt(nombreProduitDansPanier.innerHTML) - parseInt(1)
    } 
  });



//   var nombreProduitDansPanier = document.querySelector(".nombreProduitDansPanier");
//   var buttonAchetée =  document.querySelector(".buttonAchetée");
//   switch (nombreProduitDansPanier) {
//       case"1":
//       text = 
//       break;
//   }





  