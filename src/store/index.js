import Vue from 'vue';
import Vuex from 'vuex';
import articles from './modules/articles';

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        articles
    }
})