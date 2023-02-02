import * as types from './ActionTypes'

export const GetMusicRequest = ( ) =>{
    return {
        type : types.GET_MUSIC_REQUEST
    }
}

export const GetMusicSuccess = (payload) =>{
    return {
        type : types.GET_MUSIC_SUCCESS,
        payload
    }
}


export const GetMusicFailure = ( ) =>{
    return {
        type : types.GET_MUSIC_FAILURE
    }
}