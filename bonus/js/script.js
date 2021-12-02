alert('Attenzione vengono richiesti dati personali!');
alert('Si è realmente sicuri di voler proseguire?');

const fiume = prompt('Qual è il fiume più lungo di Europa');
const isole = prompt('Nominare un arcipelago che comprende almeno 5 isole');
const montagna = prompt('Qual è il monte più alto del mondo');


const auto = prompt('Qual è la vostra auto preferita');
const fan = prompt('Per caso siete fan audi?');
alert('Siete pregati di ripensarci molto bene così nessuno rischia di farsi male :)');
alert('Caso in cui la risposta sia positiva, potete proseguire sereni; caso contrario siete pregati di abbandonare immediatamente il sito');


const userName = prompt('Inserire il vostro cognome');
const lastName = prompt('Inserire il vostro cognome');
const date = prompt('Qual è la vostra data di nascita');

alert(`Pensavate di essere salvi e invece no :/, dovete comunque chiudere la pagina se non siete fan audi :( , ora però ho i vostri dati e posso venire a cercarvi a casa :) , muahhahhahahaha`);

let htmlElement = document.getElementById('cultura-generale');
htmlElement.innerHTML = `Punteggio di ${userName} ${lastName} nato nel ${date} è di: 6.5, ora chi è che ride, muahahahahhah :))))`;