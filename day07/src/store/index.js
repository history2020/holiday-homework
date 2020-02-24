import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // 控制左侧导航展开收缩的
    isCollapse: false
  },
  mutations: {
    // 控制左侧导航展开收缩的
    setCollapse(state) {
      state.isCollapse = !state.isCollapse;
    }
  },
  actions: {},
  modules: {}
});
