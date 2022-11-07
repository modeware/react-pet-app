import SimpleModal from "../../libs/Modal/Modal";
import SimpleForm from './../../libs/Form/form';
import {useDispatch, useSelector } from 'react-redux'
import {addNewPet, create, fetchAllPets, updateSucess} from '../../features/pet/pet'
import { AppDispatch, RootState } from "../../app/store";
import { Alert, AlertDescription, AlertIcon, AlertTitle } from "@chakra-ui/react";
import { useToast } from '@chakra-ui/react'
import { useEffect } from "react";

const PetForm: any = (props: any) => {
    const dispatch = useDispatch<AppDispatch>()
    const {error, success} = useSelector((state: RootState)=>state.pet)
    const toast = useToast()
    const callback = (data: any) => {
        dispatch(addNewPet({...data}))
    }

    useEffect(()=>{
        if(success){
            toast({
                title: 'Successfully Added Pet.',
                description: "We've created a pet for you.",
                status: 'success',
                duration: 9000,
                isClosable: true,
              })
              dispatch(updateSucess())
        }
    }, [success])


    return (
        <SimpleModal header="Create Pet" modalButtonTitle="Create Pet">
            <SimpleForm 
                submitCallBack = {callback}
                formArray={[
                            {
                                name:'name', type:'input', placeholder:"Pet Name",
                            },
                            {
                                name:'type', type:'input', placeholder:"Animal Type",
                            },
                            ]}/>
            {
            error.createError && <Alert status='error' mt='10'  >
                <AlertIcon />
                    <AlertTitle>Error</AlertTitle>
                    <AlertDescription>{error.createError}</AlertDescription>
                </Alert>
            }
        </SimpleModal>
    )


}


export default PetForm;