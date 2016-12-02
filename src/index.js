import { createStore } from 'redux'

class Pokemon {
  constructor(specie) {
    this._specie = specie;
    this._level = 1;
  }

  setSpecie(specie) {
    this._specie = specie;
    return this;
  }

  updateLevel() {
    this._level += 1;
    return this;
  }
}

const eeveelution = (state = new Pokemon('Eevee'), action) => {
  switch (action.type){
    case 'WATER_STONE':
      return state.setSpecie('Vaporeon');
    case 'THUNDER_STONE':
      return state.setSpecie('Jolteon');
    case 'FIRE_STONE':
      return state.setSpecie('Flareon');
    case 'LEVEL_UP':
      return state.updateLevel();
    default:
      return state;
  }
}

const eevee = new Pokemon('Eevee');

const store = createStore(eeveelution, eevee);

store.subscribe(() => console.log(store.getState()));

console.log(store);

store.dispatch({ type: 'WATER_STONE' });
store.dispatch({ type: 'LEVEL_UP' });
store.dispatch({ type: 'THUNDER_STONE' });
store.dispatch({ type: 'WATER_STONE' });

console.log(eevee);

