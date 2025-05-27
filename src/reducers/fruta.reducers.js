import { actionsTypes } from "../components/constants/frutas"

const INITIAL_STATE = {
    frutas: []
}

const reducers = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case actionsTypes.ADICIONAR_FRUTA:
            return {frutas: [...state.frutas, {...action.payload}]} //pega o que já tinha e add o novo
        case actionsTypes.REMOVER_FRUTA:
            //pega o que já tinha desde que o id seja diferente do informado
            return {frutas: state.frutas.filter(x => x.id !== action.payload.id)}
        default:
            return state    
    }
}

export {reducers}