export const state = () => ({
  layout: null
})

export const mutations = {
  SET_LAYOUT_DATA (state, data) {
    state.layout = data
  }
}

export const actions = {
  async nuxtServerInit ({ commit }, { $prismic }) {
    const layout = await $prismic.api.getSingle('layout')

    commit('SET_LAYOUT_DATA', layout.data)
  }
}
