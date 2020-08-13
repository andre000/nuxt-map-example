import roomData from '../data/residencias.json'
import averagePriceData from '../data/media_preco.json'

export const store = () => ({
  page: 1,
  pageSize: 5,
  rooms: [],
  averagePrice: []
})

export const mutations = {
  SET_ROOMS (state, rooms) {
    state.rooms = rooms
  },

  SET_AVERAGE_PRICE (state, averagePrice) {
    state.averagePrice = averagePrice
  },

  SET_PAGE (state, page) {
    state.page = page
  },
  SET_PAGE_SIZE (state, size) {
    state.pageSize = size
  }
}

export const actions = {
  nuxtServerInit ({ dispatch, commit }) {
    dispatch('loadRooms')
    dispatch('loadAveragePrice')
    commit('SET_PAGE', 1)
    commit('SET_PAGE_SIZE', 5)
  },

  loadRooms ({ commit }) {
    commit('SET_ROOMS', roomData)
  },
  loadAveragePrice ({ commit }) {
    commit('SET_AVERAGE_PRICE', averagePriceData)
  }
}

export const getters = {
  paginatedRooms (state) {
    return state.rooms.slice(0, state.page * state.pageSize)
  }
}
