import React from 'react';

/* shallow permet de faire un rendu d'un composant, sans faire le rendu des
sous-composants
https://enzymejs.github.io/enzyme/docs/api/shallow.html
*/
import { shallow } from 'enzyme';

import { expect } from 'chai';

// import du composant à tester
import RecipeSmall from 'src/components/Home/RecipeSmall';

// on importe Link et Heart parce qu'on en a besoin pour le test de RecipeSmall
import { Link } from 'react-router-dom';
import { Heart } from 'react-feather';

// only (utilisé sur describe ou sur it) permet de zapper tous les autres
// tests => ne pas oublier de l'enlever quand on a fini d'écrire le test
// describe.only('<RecipeSmall />', () => {
describe('<RecipeSmall />', () => {
  // skip (utilisé sur describe ou sur it) permet de zapper ce test-là
  // => ne pas oublier de l'enlever à la fin
  // it.skip('Uses information given as props', () => {
  it('Uses information given as props', () => {
    const testTitle = 'Pizza au fromage';
    const slug = 'pizza-au-fromage';

    const wrapper = shallow(<RecipeSmall title={testTitle} thumbnail="img1.png" difficulty="Facile" isFavorite={false} />);

    // vérifier que la prop title est utilisée pour le h2
    // rechercher les h2
    const elementsH2 = wrapper.find('h2'); // .nomDeClasse // NomDUnComposant
    // je vais vérifier que j'en ai un seul
    expect(elementsH2).to.have.lengthOf(1);
    // je vérifie le contenu => comme il y a un seul h2, pas besoin de [0]
    expect(elementsH2.text()).to.equal(testTitle);

    // vérifier que la prop title est utilisée pour le composant Link
    // rechercher les instances du composant Link et vérifier qu'il y en a une
    const linkComponents = wrapper.find(Link);
    expect(linkComponents).to.have.lengthOf(1);
    // vérification de la prop 'to', qui vaut /recipe + slugify sur le titre de la
    // recette
    expect(linkComponents.props()).to.have.property('to', `/recipe/${slug}`);

    // TODO vérifier aussi que thumbnail est utilisé comme src pour l'image, et
    // difficulty pour un p
  });

  it('Highlight favorite recipes', () => {
    // rendu du composant avec isFavorite = false
    let wrapper = shallow(<RecipeSmall title="a" thumbnail="img1.png" difficulty="Facile" isFavorite={false} />);

    // vérifier qu'on n'a pas className recipe-small--is-favorite
    let articles = wrapper.find('article');
    expect(articles).to.have.lengthOf(1);
    expect(articles.props()).to.have.property('className', 'recipe-small');

    // vérifier qu'on n'a pas d'icône
    let heartComponents = wrapper.find(Heart);
    expect(heartComponents).to.have.lengthOf(0);

    // rendu du composant avec isFavorite = true
    wrapper = shallow(<RecipeSmall title="a" thumbnail="img1.png" difficulty="Facile" isFavorite={true} />);

    // vérifier qu'on a className recipe-small--is-favorite
    articles = wrapper.find('article');
    expect(articles).to.have.lengthOf(1);
    expect(articles.props()).to.have.property('className', 'recipe-small recipe-small--is-favorite');

    // vérifier qu'on a une icône
    heartComponents = wrapper.find(Heart);
    expect(heartComponents).to.have.lengthOf(1);
  });
});
