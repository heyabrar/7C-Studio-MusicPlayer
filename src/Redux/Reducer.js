import * as types from './ActionTypes'
const InitialData = {
    Music: [],
    isLoading: false,
    isError: false
}

export default function MusicReducer(state = InitialData, action) {
    const { type, payload } = action;

    switch (type) {
        case types.GET_MUSIC_REQUEST: {
            return {
                ...state,
                isLoading: true
            }
        }

        case types.GET_MUSIC_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                Music: payload,
            }
        }

        case types.GET_MUSIC_FAILURE: {
            return {
                ...state,
                isError: true,
                Music: [],
            }
        }
        default:
            return state
    }
}