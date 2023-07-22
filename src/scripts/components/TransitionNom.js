export default class TransitionNom {
  /**
   * @param {HTMLElement} element - contient l'élément html contenant le data-component Transition
   */
  constructor(element) {
    this.element = element;
    this.init();
  }

  init() {
    // Lancez la transition après 10 secondes
    setTimeout(() => {
      this.transition();

      setInterval(() => {
        this.transition();
      }, 20000);
    }, 10000);
  }

  transition() {
    const infoGaming = this.element.querySelector('.info__gaming');
    const infoPersonnel = this.element.querySelector('.info__personnel');

    // Masquez info__gaming en diminuant son opacité à 0
    infoGaming.style.opacity = 0;

    // Affichez info__personnel en augmentant son opacité à 1
    infoPersonnel.style.opacity = 1;

    // réinitialiser l'opacité après la transition
    setTimeout(() => {
      infoGaming.style.opacity = 1;
      infoPersonnel.style.opacity = 0;
    }, 10000); // Attendez 10 seconde
  }
}
