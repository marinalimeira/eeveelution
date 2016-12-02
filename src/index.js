import { createStore } from 'redux'

const Pokemon = {
  init: (specie) => ({ level: 1, specie }),
  setSpecie: (prev, specie) => ({ ...prev, specie }),
  updateLevel: (prev) => ({ ...prev, level: prev.level + 1}) 
}

const eevee = Pokemon.init('Eevee');

const eeveelution = (state = eevee, action) => {
  switch (action.type){
    case 'WATER_STONE':
      return Pokemon.setSpecie(state, 'Vaporeon');
    case 'THUNDER_STONE':
      return Pokemon.setSpecie(state, 'Jolteon');
    case 'FIRE_STONE':
      return Pokemon.setSpecie(state, 'Flareon');
    case 'LEVEL_UP':
      return Pokemon.updateLevel(state);
    default:
      return state;
  }
}

const store = createStore(eeveelution);

store.subscribe(() => console.log(store.getState()));

console.log(store);

store.dispatch({ type: 'WATER_STONE' });
store.dispatch({ type: 'LEVEL_UP' });
store.dispatch({ type: 'THUNDER_STONE' });
store.dispatch({ type: 'WATER_STONE' });

console.log(eevee);
