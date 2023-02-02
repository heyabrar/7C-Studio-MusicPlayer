import { useEffect, useState } from "react";
import { Text, Progress, useToast, Flex, Image, Box, Button } from '@chakra-ui/react'
import { AddMusicData, DeleteMusicData, GetMusicData } from "../Fetch/Fetch";
import { GetMusicFailure, GetMusicRequest, GetMusicSuccess } from "../Redux/Action";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "./Navbar";
import AddSongModal from "./AddSongModal";
import TableComponent from "./Table";

export default function DisplaySongs() {
    const DisPatch = useDispatch();
    const Toast = useToast();
    const [VisibleModal, setVisibleModal] = useState(false);
    const { Music, isLoading, isError } = useSelector((store) => {
        return {
            Music: store.Music,
            isLoading: store.isLoading,
            iError: store.isError
        }
    })

    //Opens modal to add a music
    const AddSongOpenModal = () => {
        setVisibleModal(true)
    }

    //Get all the music fro api basically a get request
    const handleGetMusic = () => {
        DisPatch(GetMusicRequest());
        GetMusicData().then((res) => {
            DisPatch(GetMusicSuccess(res.data))
        })
            .catch((err) => DisPatch(GetMusicFailure(err)))
    }


    //Adds new music to the api basically post request
    const AddNewSong = (payload)=>{
        return AddMusicData(payload).then((res)=>{
            Toast({title : 'New Music Added', status : 'success', position : 'top'})
        })
        .catch((err)=> console.log(err))
    }

    const handleAddSong = (paylaod) =>{
       AddNewSong(paylaod).then(( )=> handleGetMusic( ));
    }


    //Deletes the music, a delete request
    const handleDeleteMusic = (id) => {
        return DeleteMusicData(id).then((res) => {
            Toast({ title: 'Music Deleted', status: 'success', position: 'top' })
        })
            .catch((err) => console.log(err))
    }

    const DeleteMusic = (id) => {
        handleDeleteMusic(id).then(() => handleGetMusic());
    }

//to render everytime when anything changes
    useEffect(() => {
        handleGetMusic();
    }, []);

    return (
        <>
            <Box shadow='sm' padding='10px'>
                <Navbar />
                <Flex justifyContent='space-between' mt='20px' padding='10px' alignItems='center'>
                    <Text>Songs</Text>
                    <Button size='sm' onClick={AddSongOpenModal} padding='5px, 16px, 5px, 16px' bg='#FDB927' colorScheme='#FDB927' color='black'>Add Songs</Button>
                </Flex>
            </Box>

            {isLoading && <Progress size='sm' isIndeterminate colorScheme='orange' color='#FDB927' />}
            <Text>{isError && 'Something Went Wrong!!'}</Text>
            <TableComponent data={Music} DeleteMusic={DeleteMusic} />
            <AddSongModal isOpen={VisibleModal} setIsopen={setVisibleModal} handleAddSong={handleAddSong}/>
        </>
    )
}


//Dummy music URL's
//https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3
//https://www.soundhelix.com/examples/mp3/SoundHelix-Song-13.mp3
//http://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/theme_01.mp3
//http://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/music/race2.ogg
//http://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/music/win.ogg