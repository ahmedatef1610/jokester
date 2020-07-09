import Vue from 'vue'
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        jokes:[]
    },
    getters: {

    },
    mutations: {
        init_jokes(state,payload){
            state.jokes.push(...payload);
        },
        add_jokes(state,payload){
            state.jokes.push(payload);
        },
        remove_joke(state,index){
            state.jokes.splice(index,1);
        }
    },
    actions: {
        initJokes({commit}){
            fetch('https://official-joke-api.appspot.com/jokes/ten')
            .then(res=>res.json())
            .then(data=>commit('init_jokes',data));
        },
        addJoke({commit}){
            fetch('https://official-joke-api.appspot.com/jokes/random')
            .then(res=>res.json())
            .then(data=>commit('add_jokes',data));
        },
        removeJoke({commit},index){
            commit('remove_joke',index);
        }
        
    },
    
});