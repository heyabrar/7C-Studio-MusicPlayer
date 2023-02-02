import { Flex, Image, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react"
import { AiOutlineDelete } from "react-icons/ai"

export default function TableComponent({data,DeleteMusic}) {
    return (
        <>
            <TableContainer >
                <Table variant='simple'>
                    <Thead>
                        <Tr>
                            <Th>SONG NAME</Th>
                            <Th>SOURCE</Th>
                            <Th >ADDED ON</Th>
                            <Th color='white'>play</Th>
                            <Th color='white'>delete</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {data.length > 0 && data.map((elem) => {
                            return <Tr key={elem.id} textAlign='center'>
                                <Td>
                                    <Flex alignItems='center' gap='20px'>
                                        <Image src={elem.thumbnail} width='60px' />
                                        {elem.name}
                                    </Flex>
                                </Td>

                                <Td>{elem.source}</Td>
                                <Td>{elem.date}</Td>
                                <Td>
                                    <audio controls src={elem.link} style={{ "width": '180px' }}>
                                        {/* <Text align='center' color='#FDB927' fontSize='40px' cursor='pointer'>{!isPlay ? <AiFillPlayCircle /> : <AiFillPauseCircle />}</Text>  */}
                                    </audio>
                                </Td>
                                <Td><Text align='center' cursor='pointer' onClick={() => DeleteMusic(elem.id)} fontSize='20px'><AiOutlineDelete /></Text></Td>
                            </Tr>
                        })}
                    </Tbody>
                </Table>
            </TableContainer>
        </>
    )
}