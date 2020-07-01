import { expect } from 'chai';

// on importe le morceau de code qu'on veut tester
import { slugifyTitle, getRecipeBySlug } from 'src/utils';

describe('utils', () => {
  describe('function slugifyTitle', () => {
    it('is a function', () => {
      expect(slugifyTitle).to.be.a('function');
    });

    it('replaces spaces', () => {
      expect(slugifyTitle('chaîne de texte')).to.equal('chaine-de-texte');

      // on choisit les valeurs qu'on veut, on aurait pu écrire aussi :
      /*
      const string = 'Crêpes raffinées';
      const expectedSlug = 'crepes-raffinees';
      expect(slugifyTitle(string)).to.equal(expectedSlug);
      */
    });

    it('replaces upper case', () => {
      expect(slugifyTitle('Pizza-Margherita')).to.equal('pizza-margherita');
    });
  });

  describe('function getRecipeBySlug', () => {
    it('finds a recipe by its slug', () => {
      // on définit un tableau de recettes
      const recipes = [
        {
          id: 1,
          title: 'Crêpes raffinées',
        },
        {
          id: 2,
          title: 'Des sushis',
        },
      ];

      // on définit le slug d'une recette du tableau
      const slug = slugifyTitle(recipes[1].title);

      // on vérifie que getRecipeBySlug retourne la bonne recette dans le tableau
      // on vérifie la référence de la recette, pas besoin de comparer en profondeur
      // chaque propriété
      expect(getRecipeBySlug(recipes, slug)).to.equal(recipes[1]);
    });
  });
});
