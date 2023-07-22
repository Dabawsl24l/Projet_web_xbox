import TransitionNom from './components/TransitionNom';
import Heure from './components/Heure';
import Background from './components/Background';

/** Composante ComponentFactory */
export default class ComponentFactory {
  constructor() {
    this.componentList = {
      TransitionNom,
      Heure,
      Background,
    };
    // initalise la composante ComponentFactory
    this.init();
  }
  /**
   *Récupère tous les éléments HTML ayant l'attribut data-component et pour chaque élément trouvé, récupère le nom de la composante à partir de cet attribut
   */
  init() {
    const components = document.querySelectorAll('[data-component]');

    for (let i = 0; i < components.length; i++) {
      const element = components[i];

      //Si la classe correspondant à cette composante est présente dans la liste componentList, une instance de cette classe est créée en lui passant l'élément HTML en tant que paramètre. Sinon, un message d'erreur est affiché dans la console.
      const componentName = element.dataset.component;
      if (this.componentList[componentName]) {
        new this.componentList[componentName](element);
      } else {
        console.log(`La composante ${componentName} n'existe pas`);
      }
    }
  }
}
