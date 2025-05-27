import { actionsTypes } from "../components/constants/frutas"

const actions ={
    adicionar: fruta => ({
        type: actionsTypes.ADICIONAR_FRUTA,
        payload: fruta,
    }),
    remover: fruta => ({
        type: actionsTypes.REMOVER_FRUTA,
        payload: fruta,
    })
}

export {actions}