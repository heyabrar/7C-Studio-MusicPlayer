import { Button, Container, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from "@chakra-ui/react"
import OTP from "./OTP";

export default function OptModal({ number, isOpen, setIsopen }) {
  const onClose = () => {
    setIsopen(false)
  };
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} className='TotalModal' size='full'>
        <ModalContent>
          <ModalCloseButton />
          <Container>
            <ModalBody>
              <OTP setIsopen={setIsopen} number={number} />
            </ModalBody>
          </Container>
        </ModalContent>
      </Modal>
    </>
  )
}