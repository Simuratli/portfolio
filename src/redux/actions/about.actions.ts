import {GET_ABOUT_DATA} from '../constants'

export const getAboutData = (payload: any) => ({
    type: GET_ABOUT_DATA,
    payload
})