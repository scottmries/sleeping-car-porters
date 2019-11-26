import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      devMode: true
    })
  })
}

export default createStore