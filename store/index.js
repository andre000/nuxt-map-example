import roomData from '../data/residencias.json'
import averagePriceData from '../data/media_preco.json'

export const store = {
  rooms: [],
  averagePrice: []
}

export const mutations = {
  SET_ROOMS (state, rooms) {
    state.rooms = rooms
  },

  SET_AVERAGE_PRICE (state, averagePrice) {
    state.averagePrice = averagePrice
  }
}

export const actions = {
  nuxtServerInit ({ dispatch }) {
    dispatch('loadRooms')
    dispatch('loadAveragePrice')
  },

  loadRooms ({ commit }) {
    commit('SET_ROOMS', roomData)
  },
  loadAveragePrice ({ commit }) {
    commit('SET_AVERAGE_PRICE', averagePriceData)
  }
}
