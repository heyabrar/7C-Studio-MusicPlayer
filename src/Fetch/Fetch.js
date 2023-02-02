import axios from "axios";

//Get request 
export const GetMusicData = ( ) =>{
    return axios.get(`https://witty-lime-scallop.cyclic.app/songs`)
}

//Post request
export const AddMusicData = (payload) =>{
    return axios.post(`https://witty-lime-scallop.cyclic.app/songs`, payload)
}

//Delete request
export const DeleteMusicData = (id) =>{
    return axios.delete(`https://witty-lime-scallop.cyclic.app/songs/${id}`)
}