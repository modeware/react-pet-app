import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react';
import { FC } from 'react';


const SimpleModal: FC<any> = ({header, modalButtonTitle, footerButtonTitle1, footerButtonTitle2, ...props }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    return (
      <>
        <Button variant="link" onClick={onOpen}>{modalButtonTitle}</Button>
  
        <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>{header}</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              {props.children}
            </ModalBody>
  
            <ModalFooter>
            {
                footerButtonTitle1 && <Button colorScheme='blue' mr={3}>
                {footerButtonTitle1}
              </Button>
            }
              {footerButtonTitle2 && <Button onClick={onClose}>{footerButtonTitle2}</Button>}
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }

  export default SimpleModal;