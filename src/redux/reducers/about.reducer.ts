import { GET_ABOUT_DATA } from '../constants'

const initialState = {
    
}


export const aboutReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case GET_ABOUT_DATA:
            return {
                ...state,
                ...action.payload
            }
        default:
            return {
                ...state
            };
    }
}