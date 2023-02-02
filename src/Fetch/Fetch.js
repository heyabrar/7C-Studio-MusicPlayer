import axios from "axios";

export const GetMusicData = ( ) =>{
    return axios.get(`https://witty-lime-scallop.cyclic.app/songs`)
}

export const AddMusicData = (payload) =>{
    return axios.post(`https://witty-lime-scallop.cyclic.app/songs`, payload)
}

export const DeleteMusicData = (id) =>{
    return axios.delete(`https://witty-lime-scallop.cyclic.app/songs/${id}`)
}