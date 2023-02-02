import { Box, Button, Flex, Input, Text, useToast } from "@chakra-ui/react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function OTP({ setIsopen, number }) {
    const ref = useRef();
    const Toast = useToast();
    const NaviGate = useNavigate();

    const handleMove = (start, end) => {
        if (start.value.length) {
            document.getElementById(end).focus();
        }
    }

    const handleCheckOTP = () => {
        let one = document.getElementById('one').value;
        let two = document.getElementById('two').value;
        let three = document.getElementById('three').value;
        let four = document.getElementById('four').value;

        if (one !== '1' || two !== '2' || three !== '3' || four !== '4') Toast({ title: 'Incorrect OTP', position: 'top', status: 'error' })
        else {
            NaviGate('/songs')
            Toast({ title: 'LogIn Successfull', position: 'top', status: 'success' });
            setIsopen(false)
        }
    }

    const handleResend = () => {
        Toast({ title: 'OTP : 1234', position: 'top', status: 'success' })
    }

    const handleAnotherNumber = () => {
        setIsopen(false)
    }

    return (
        <>
            <Box>
                <Text fontSize='38px' color='#552583'>OTP Verification</Text>
                <Text fontSize='12px' width='400px'>We have sent an otp to {'+91 ' + number}. Please enter the code recived to verify.</Text>
                <Flex gap='50px' mt='10px'>
                    <Input type='number' id="one" maxLength={1} onKeyUp={() => handleMove(ref.current, 'two')} ref={ref} />
                    <Input type='number' id='two' maxLength={1} onKeyUp={() => handleMove(ref.current, 'three')} />
                    <Input type='number' id='three' maxLength={1} onKeyUp={() => handleMove(ref.current, 'four')} />
                    <Input type='number' id='four' maxLength={1} onKeyUp={() => handleMove(ref.current, 'five')} />
                </Flex>
                <Button onClick={handleCheckOTP} width='100%' bgColor='#552583' colorScheme='#552583' color='white' mt='20px' borderRadius='12px'>Verify</Button>
                <Text onClick={handleResend} cursor='pointer' fontSize='16px' mt='5px' textDecoration='underline' align='center'>Resend OTP</Text>
                <Text onClick={handleAnotherNumber} cursor='pointer' fontSize='16px' mt='5px' textDecoration='underline' align='center'>Use another number</Text>
            </Box>
        </>
    )
}