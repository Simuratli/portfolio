import { SET_CURSOR_TEXT, SET_CURSOR_VARIANT, SET_CURSOR_IMAGE } from '../constants'

const initialState = {
    cursorVariant: "default",
    cursorText: "",
    cursorImage: "",
}


export const cursorReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SET_CURSOR_TEXT:
            return {
                ...state,
                cursorText: action.payload
            }
        case SET_CURSOR_VARIANT:
            return {
                ...state,
                cursorVariant: action.payload
            }
        case SET_CURSOR_IMAGE:
            return {
                ...state,
                cursorImage: action.payload
            }
        default:
            return {
                ...state
            };
    }
}