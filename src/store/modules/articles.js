import * as types from '../types'

const state = {
    list: []
}


// 类似React中 reducer
const mutations = {
    [types.GET_ARTICLE_LIST](state, formState) {
        // todo 处理数据
    }
}


const actions = {
    getArticleList: ({commit}) => {
        // todo 发送异步请求

        commit(types.GET_ARTICLE_LIST, {
           // 这里是数据 
        })
    }
}


const getters = {
    // todo
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}