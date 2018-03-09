const mybutton = document.getElementById('mybutton');
const antwoord = document.getElementById('antwoord');
const DeVragen = document.getElementsByClassName('DeVragen');
const Resultaten = document.getElementsByClassName('Resultaten');
let checks;
let vraag = 1;
let goed = 0;
let fout = 0;
Mathrandom();
document.getElementById('vraag').innerHTML = vraag;

for (var i=0;i<Resultaten.length;i+=1){
  Resultaten[i].style.display = 'none';
}

function Mathrandom() {

  var equals1 = Math.floor((Math.random() * 10) + 1);
  var equals2 = Math.floor((Math.random() * 10) + 1);

  document.getElementById("equals1").innerHTML = equals1;
  document.getElementById("equals2").innerHTML = equals2;

  checks = equals1 * equals2;
}
function Checker(){
    if (checks == antwoord.value) {
      goed++;
      localStorage.setItem("goed", goed);
       document.getElementById("goed").innerHTML = goed;
    }
    else {
      fout++;
      localStorage.setItem("fout", fout);
       document.getElementById("fout").innerHTML = fout;

    }
    document.getElementById("antwoord").value = "";
    Volgende();
    CheckIfTen();

}
function Volgende(){
  vraag ++;
  document.getElementById('vraag').innerHTML = vraag;
  localStorage.setItem("vraag", vraag);
  Mathrandom();

}
function CheckIfTen() {
  if (vraag == 11) {
    document.getElementById("mybutton").value = "check je scoren!";
    //Checked allen elementen in de div en maakt die ontzichtbaar
    for (var i=0;i<DeVragen.length;i+=1){
      DeVragen[i].style.display = 'none';
    }
    for (var i=0;i<Resultaten.length;i+=1){
      Resultaten[i].style.display = 'table';
    }
  }
}

mybutton.addEventListener('click', Checker, false)
