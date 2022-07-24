import {createStore} from "vuex"

export default createStore({
    state: {
        title: "welcome",
        notes: []
    },
    getters: {
        totalNotes(state){
            return state.notes.length;
        },
    },
    mutations: {
        saveNote(state, note){
            state.notes.push({title: note.title, complated: false})
        },
    },
    actions:{
        saveNoteAction(context, value){
            context.commit('saveNote', value)
        },
    },
})