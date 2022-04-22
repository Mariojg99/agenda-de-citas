import { typesCitas } from "../types/types";

const initialState = {
    citas: []
}

export const citasReducer = (state = initialState, action) => {
    switch (action.type) {
        case typesCitas.register:
            return {
                citas: [action.payload]
            }
        
        case typesCitas.list:
            return {
                citas: [...action.payload]
            }

        case typesCitas.delete:
            return {
                citas: state.citas.filter(cita => cita.nombre !== action.payload)
            }
    
        default:
            return state
    }
}