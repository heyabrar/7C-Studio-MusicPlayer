import { Button, Container, Flex, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay, Text, useToast } from "@chakra-ui/react"
import { useState } from "react";

export default function AddSongModal({ isOpen, setIsopen, handleAddSong }) {
    const [name, setName] = useState('');
    const [url, setUrl] = useState('');
    const [source, setSource] = useState('');
    const [image, setImage] = useState('');
    const Toast = useToast();
    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let currentDate = `${day}/${month}/${year}`;

    const AddSong = (name, url, source, image) => {
        if (!name || !url || !source || !image) {
            Toast({ title: 'Please fill the input fields', status: 'error', position: 'top' })
        }
        else {
            const paylaod = {
                name,
                link: url,
                source,
                thumbnail: image,
                date: currentDate
            }
            handleAddSong(paylaod)
            setIsopen(false)
        }
    }

    const onClose = () => {
        setIsopen(false)
    };
    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose} className='TotalModal' size="lg">
                <ModalOverlay />
                <ModalContent>
                    <ModalCloseButton />
                    <Container>
                        <ModalBody padding='20px'>
                            <Text>Add Song</Text>
                            <FormControl>
                                <FormLabel mt='15px'>Song Name</FormLabel>
                                <Input type='text' placeholder="Song Name" value={name} onChange={(e) => setName(e.target.value)} />

                                <FormLabel mt='15px'>Song Link</FormLabel>
                                <Input type='text' placeholder="Song URL" value={url} onChange={(e) => setUrl(e.target.value)} />


                                <FormLabel mt='15px'>Song Source</FormLabel>
                                <Input type='text' placeholder="Song Source" value={source} onChange={(e) => setSource(e.target.value)} />


                                <FormLabel mt='15px'>Add Profile Thubmnail URL</FormLabel>
                                <Input type='text' value={image} name='avatar' onChange={(e) => setImage(e.target.value)} />
                            </FormControl>

                            <Flex float='right' mt='10px' marginBottom='20px' gap='5px'>
                                <Button onClick={onClose} size='sm'>Cancel</Button>
                                <Button size='sm' colorScheme=' #1890FF' bg=' #1890FF' onClick={() => AddSong(name, url, source, image)}>Add</Button>
                            </Flex>
                        </ModalBody>
                    </Container>
                </ModalContent>
            </Modal>
        </>
    )
}