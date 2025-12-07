// Initialisation de GSAP avec ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Animation des éléments avec la classe .apparaitre (fade up)
gsap.utils.toArray('.apparaitre').forEach((element) => {
  gsap.from(element, {
    y: 50,
    opacity: 0,
    duration: 1,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: element,
      start: 'top 85%',
    },
  });
});

// Gestion du mode jour/nuit avec persistance
const boutonMode = document.getElementById('boutonModeSombre');

// Fonction pour appliquer le mode
function appliquerMode(estModeJour) {
  if (estModeJour) {
    document.body.classList.add('dark');
    boutonMode.textContent = '☀️';
  } else {
    document.body.classList.remove('dark');
    boutonMode.textContent = '🌙';
  }
  // Sauvegarder le choix dans localStorage
  localStorage.setItem('modeJour', estModeJour ? 'true' : 'false');
}

// Charger le mode sauvegardé au chargement de la page
function chargerMode() {
  const modeSauvegarde = localStorage.getItem('modeJour');
  // Par défaut, mode nuit (false) si rien n'est sauvegardé
  const estModeJour = modeSauvegarde === 'true';
  appliquerMode(estModeJour);
}

// Appliquer le mode au chargement
chargerMode();

// Gérer le clic sur le bouton
boutonMode.addEventListener('click', () => {
  const estActuellementModeJour = document.body.classList.contains('dark');
  appliquerMode(!estActuellementModeJour);
});



// ainimation pour détails des projets
// function ouvrirModal(titre, description) {
//   document.getElementById('modal-titre').textContent = titre;
//   document.getElementById('modal-description').textContent = description;
//   document.getElementById('modal').style.display = 'block';
// }
// function fermerModal() {
//   document.getElementById('modal').style.display = 'none';
// }

// function ouvrirModal(element) {
//   var titre = element.getAttribute('data-titre');
//   var description = element.getAttribute('data-description');
//   document.getElementById('modal-titre').textContent = titre;
//   document.getElementById('modal-description').textContent = description;
//   document.getElementById('modal').style.display = 'block';
// }
function fermerModal() {
  document.getElementById('modal').style.display = 'none';
    document.body.style.overflow = '';
}

function ouvrirModal(element) {
  var contenu = element.getAttribute('data-contenu');
  document.getElementById('modal-description').innerHTML = contenu;
  document.getElementById('modal').style.display = 'block';
  document.body.style.overflow = 'hidden';
}