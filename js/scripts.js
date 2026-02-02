const btnPlus = document.querySelector('.js-plus');
const conteneur = document.querySelector('.conteneur-transports-invisible');

btnPlus.addEvenetListener('click', fouvreferme);


function fouvreferme(){
    conteneur.classList.toggle('conteneur-transports-invisible');
};