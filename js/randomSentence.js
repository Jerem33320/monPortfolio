let myPassion = document.getElementById('passion');

let passions = [
    'J\'ai voyagé 4 mois en Asie du Sud-Est.',
    'J\'ai voyagé 7 mois en Australie avec le visa Working Holidays.',
    'Je pratique la Guitare électrique depuis l’âge de 15ans.',
    'J\'aime tellement coder que je ne vois pas passer mes journées.',
    'J\'aime regarder la télé en mangeant des m&m\'s.',
    'J\'ai toujours aimé jouer à la playstation, surtout aux RPG!',
    'Je suis très gourmand, autant sucré que salé!',
    'Mon logo a été créé par Leslie Authier, très douée en Design.',
    'Etes-vous déjà allé à Londres pour Noël? C\'est top!',
    'Mon futur voyage? Etats-Unis ou Japon.',
    'Je fais du sport (mais pas l\'hiver).',
    'Mon groupe de musique préféré: Periphery.',
    'Je possède en DVD toute la filmographie de Tarantino.'
]

function getRandomSentence () {
    var passion= passions[Math.floor(Math.random()*passions.length)];
    myPassion.innerText = passion;
}