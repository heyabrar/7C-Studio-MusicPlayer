import { Box,Flex } from "@chakra-ui/react";
import DisplaySongs from "../Components/DisplaySongs"
import SideBar from "../Components/SideBar";

export default function SongsListing() {
    return (
        <>
            <Flex border='1px solid black' gap='20px'>
                <Box width='255px' shadow='md'>
                    <SideBar />
                </Box>

                <Box shadow='md' width='85%'>
                    <DisplaySongs />
                </Box>
            </Flex>
        </>
    )
}