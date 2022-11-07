import { Table } from "../../libs/Table/table";
import { FC, useEffect } from 'react';
import { useSelector, useDispatch} from 'react-redux'
import { AppDispatch, RootState } from "../../app/store";
import {fetchAllPets} from "../../features/pet/pet";
import { Box } from '@chakra-ui/react';
import AlertMessage from './../../libs/Alert/Alert';

const PetTable: FC<any> = ({caption}) => {
    const petList = useSelector((state: RootState) => state.pet)
    const header = Object.keys(petList.pet.length && petList.pet[0])
    let modifiedList = petList.pet.map(data=>({id:data.id, name: data.name, type:data.type}))
    const dispatch = useDispatch<AppDispatch>()

    useEffect(()=>{
        dispatch(fetchAllPets(1))
    }, [])



    return (
                <Box w='100%'> 
                    <Table
                        caption={caption}
                        header={header} 
                        rows={modifiedList}/>
                
                {!petList.error.fetchError && !modifiedList.length?<AlertMessage status='warning' title={'No data'} message={':('}/> : null}
                {petList.error.fetchError?
                <AlertMessage status='error' title={'Error'} message={petList.error.fetchError as string}/> : null}
            </Box>                 
    )

}

export default PetTable;