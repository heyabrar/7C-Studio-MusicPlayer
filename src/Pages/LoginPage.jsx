import { Box, Button, Container, Input, Text, useToast } from "@chakra-ui/react";
import { useState } from "react";
import OptModal from "../Components/OtpModal";

export default function LoginPage ( ){
    const Toast = useToast( );
    const [number,setNumber] = useState('');
    const [VisibleModal,setVisibleModal] = useState(false);
    const handleSignIn = (number) =>{
        if(!number || number.length > 10)
        {
            Toast({title : 'Enter Mobile Number Or Envalid Mobile Number', position:'top', status : 'error'})
        }
        else
        {
            Toast({title : 'OTP : 1234', position:'top', status : 'success'});
            setVisibleModal(true);
            // setNumber('');
        }
    }
    return (
        <>
        <Container mt='200px'>
            <Text color='#552583' fontSize='38px' fontWeight='500' lineHeight='44.53px'>Sign In</Text>
            <Text fontSize='12px' fontWeight='400' lineHeight='15px' width='414px' mt='7px'>Please enter your mobile number to login. We will send an OTP to verify number.</Text>

            <Box mt='20px'>
                <span>+91</span>
                <Input placeholder="Phone Number" type='number' value={number} onChange={(e)=> setNumber(e.target.value)} width='407px' borderRadius='8px' border='none' focusBorderColor='white' />
                <Button onClick={( ) => handleSignIn(number)} bg='#552583' color='white' width='410px' borderRadius='12px' mt='10px' colorScheme='#552583 '>Sign In</Button>
            </Box>
            <OptModal number={number} isOpen={VisibleModal} setIsopen={setVisibleModal}/>
        </Container>
        </>
    )
}