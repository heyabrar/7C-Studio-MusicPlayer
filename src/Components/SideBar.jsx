import { Box, Flex, Text } from "@chakra-ui/react";

export default function SideBar() {
    return (
        <>
            <Text align='center' fontWeight='700' fontSize='36px' lineHeight='40px' color='#552583'>LOGO</Text>
            <Flex w='255px' h='40px' padding='0px 0px 0px 24px' bg='#E6F7FF' alignItems='center' borderRight='2px solid #1890FF' mt='20px'>
                <Text fontSize='14px' lineHeight='22px' color='#1890FF' fontWeight='400'>Songs</Text>
            </Flex>
        </>
    )
}