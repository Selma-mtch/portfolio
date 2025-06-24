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

// Bouton mode sombre
const boutonMode = document.getElementById('boutonModeSombre');

boutonMode.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  boutonMode.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
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