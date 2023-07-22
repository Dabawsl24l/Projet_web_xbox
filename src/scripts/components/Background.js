export default class Background {
  /**
   * @param {HTMLElement} element - contient l'élément html contenant le data-component Background
   */
  constructor(element) {
    this.element = element;
    this.init();
  }

  init() {
    const jeuHovers = this.element.querySelectorAll('.jeu__hover');

    for (let i = 0; i < jeuHovers.length; i++) {
      const jeuHover = jeuHovers[i];
      const backgroundImageUrl = jeuHover.dataset.bg;

      jeuHover.addEventListener('mouseover', () => {
        this.setBodyBackground(backgroundImageUrl);
      });

      jeuHover.addEventListener('mouseout', () => {
        this.resetBodyBackground();
      });
    }
  }

  setBodyBackground(backgroundImageUrl) {
    document.body.style.backgroundImage = `url(${backgroundImageUrl})`;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundPosition = 'center top 15%';
  }

  resetBodyBackground() {
    document.body.style.backgroundImage = 'url(assets/images/theme_base.png)';
    document.body.style.backgroundPosition = 'bottom';
  }
}
