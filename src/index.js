import { createStore } from 'redux'

const Pokemon = {
  init: (specie) => ({ level: 1, specie }),
  setSpecie: (prev, specie) => ({ specie, level: prev.level }),
  updateLevel: (prev) => ({ specie: prev.specie, level: prev.level + 1}) 
}

// init eevee

// create reducer 'eeveelution'

// create store

// subscribe store

// dispatch action
