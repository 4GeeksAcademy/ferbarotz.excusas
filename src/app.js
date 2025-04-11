import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let who = ['Mi padre', 'Mi madre', 'Mi hermano', 'Mi abuelo'];
  let action = ['rompio', 'perdio', 'olvido', 'refundio'];
  let what = ['el celular', 'el reloj', 'las llaves', 'la tarjeta'];
  let when = ['en la mañana', 'en la noche', 'en la tarde', 'ayer'];

function generadorDeExcusas(who, action, what,  when) {
  
  let randomwho = Math.floor(Math.random() * who.length);
  let randomaction = Math.floor(Math.random() * action.length);
  let randomwhat = Math.floor(Math.random() * what.length);
  let randomwhen = Math.floor(Math.random() * when.length);
return (who[randomwho] + " " + action[randomaction]+ " "  + what[randomwhat]+ " "  +  when[randomwhen]);

}

  console.log(generadorDeExcusas(who, action, what,  when));

  document.querySelector("#excuse").innerHTML=generadorDeExcusas(who, action, what,  when);
};

  
