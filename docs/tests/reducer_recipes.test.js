// on importe la syntaxe de Chai
import { should } from 'chai';

// on importe le morceau de code à tester
import reducerRecipes from 'src/reducers/recipes';

// on a besoin de l'action pour faire le test
import { saveRecipes } from 'src/actions/recipes';

// spécificité de should : il faut l'exécuter une première fois pour
// pouvoir l'utiliser
should();

/* describe décrit un bloc de tests (on peut imbriquer). 2 paramètres :
- un texte qui décrit le bloc
- la callback qui permet d'exécuter les test pour ce bloc
*/
describe('reducer for recipes', () => {
  /* it décrit un cas de test (une ou plusieurs assertions), 2 paramètres :
  - un texte qui décrit le cas de test
  - la callback qui permet d'exécuter les tests pour ce cas
  */
  it('is a function', () => {
    // assertion
    reducerRecipes.should.be.a('function');
  });

  it('returns initial state', () => {
    const initialState = {
      recipes: [],
      loading: true,
    };
    // on veut faire une égalité en profondeur => vérifier chaque propriété
    reducerRecipes().should.deep.equal(initialState);
  });

  it('handles action SAVE_RECIPES', () => {
    // on déclare un faux state actuel : on met les valeurs qu'on veut, mais
    // il faut que ce soit différent du résultat attendu après l'exécution
    // du reducer
    const stateBefore = {
      recipes: [],
      loading: true,
    };

    // on déclare des fausses recettes pour le payload de l'action
    const recipesData = [
      {
        id: 1,
        title: 'Crêpes raffinées',
      },
      {
        id: 2,
        title: 'Une super recette',
      },
    ];

    // on crée une action en utilisant le action creator
    const action = saveRecipes(recipesData);

    // on prépare le résultat attendu
    const expectedResult = {
      recipes: recipesData,
      loading: false,
    };

    // on appelle le reducer en fournissant state actuel et action, et on
    // vérifie que le résultat est bien celui attendu
    reducerRecipes(stateBefore, action).should.deep.equal(expectedResult);
  });
});
