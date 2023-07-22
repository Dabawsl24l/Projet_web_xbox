export default class Heure {
  /**
   * @param {HTMLElement} element - contient l'élément html contenant le data-component Heure
   */
  constructor(element) {
    this.element = element;
    this.affiche = this.element.querySelector('.heure');
    this.init();
  }

  init() {
    // Mettre à jour l'heure toutes les secondes (1000 ms)
    setInterval(() => {
      this.mettreAJourHeure();
    }, 1000);

    // Appel initial pour afficher l'heure dès le chargement de la page
    this.mettreAJourHeure();
  }

  mettreAJourHeure() {
    const heureActuelle = new Date();
    let heures = heureActuelle.getHours();
    let minutes = heureActuelle.getMinutes();
    const amPm = heures >= 12 ? 'pm' : 'am';

    // Convertir en format 12 heures
    heures = heures % 12 || 12;

    // Ajouter un zéro devant les minutes si elles sont inférieures à 10
    minutes = minutes < 10 ? '0' + minutes : minutes;

    // Mettre à jour le contenu de l'élément Heure avec l'heure actuelle
    this.affiche.textContent = heures + ':' + minutes + amPm;
  }
}
