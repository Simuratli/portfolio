import { SET_CURSOR_TEXT, SET_CURSOR_VARIANT, SET_CURSOR_IMAGE } from '../constants'

export const setCursorText = (payload: any) => ({
    type: SET_CURSOR_TEXT,
    payload
})

export const setCursorVariant = (payload: any) => ({
    type: SET_CURSOR_VARIANT,
    payload
})

export const setCursorImage = (payload: any) => ({
    type: SET_CURSOR_IMAGE,
    payload
})