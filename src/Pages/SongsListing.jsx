import { Box,Flex } from "@chakra-ui/react";
import DisplaySongs from "../Components/DisplaySongs"
import SideBar from "../Components/SideBar";

export default function SongsListing() {
    return (
        <>
            <Flex gap='20px'>
                <Box width='255px' shadow='md' height='100vh'>
                    <SideBar />
                </Box>

                <Box shadow='md' width='85%'>
                    <DisplaySongs />
                </Box>
            </Flex>
        </>
    )
}