import { createStore } from 'redux'

const Pokemon = {
  init: (specie) => ({ level: 1, specie }),
  setSpecie: (prev, specie) => ({ ...prev, specie }),
  updateLevel: (prev) => ({ ...prev, level: prev.level + 1}) 
}

