import {
    SET_AUTH_TOKEN,
    UNSET_AUTH_TOKEN
} from '../constants'
import { getToken, setToken, unsetToken } from '../helpers/api'

export const initial = {
    token: getToken()
}

export default (state = initial, action) => {
    switch (action.type) {
        case SET_AUTH_TOKEN: {
            const token = action.payload
            setToken(token)
            return {...state, token}
        }

        case UNSET_AUTH_TOKEN: {
            unsetToken()
            return {...state, token: null}
        }

        default: {
            return state
        }
    }
}
