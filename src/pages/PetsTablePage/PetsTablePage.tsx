
import { Grid, Center, Box, Input } from '@chakra-ui/react';
import { GridItem } from '@chakra-ui/react';
import PetForm from './../../components/PetForm/PetForm';
import PetTable from './../../components/PetTable/PetTable';
import Sidebar from './../../libs/Sidebar/Sidebar';
import { Heading } from '@chakra-ui/react';
import { usePetsHook } from './../../libs/hooks/getPets';
import { FC } from 'react';

const PetsTablePage: FC<any> = ({number}) => {

    const getPetsHook = usePetsHook()

    const getPets: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        getPetsHook(+e.target.value)
    }

    return (
        <Grid h='90%'
             templateRows='repeat(3, 1fr)'
             templateColumns={['1fr', '1fr', 'repeat(5, 1fr)']}
             gap={4}
             position="relative"
             >
           
            <GridItem zIndex="10" bg={['white','white', 'gray.200']} position={['absolute','absolute', 'relative']}  w={'100%'} rowSpan={[1,1, 3]} colSpan={1}>
                <Sidebar/>
            </GridItem>
            

            <GridItem mt={[50, 50, 0]} colSpan={[1,1, 4]}>    
            <Grid p="2" templateColumns='1fr' templateRows={['2rem 2rem 1fr']}>
                        <GridItem >
                            <Heading as='h3' noOfLines={1}>
                                Pets List
                            </Heading>
                        </GridItem> 
                        <GridItem justifySelf="end" mr="3">
                            <PetForm/>
                        </GridItem> 
                        
                        <GridItem w="100%" overflowX="auto" alignSelf={'center'} justifySelf='center'>
                            <PetTable/>
                            <Box mt="2">
                                Go To:
                                <Input ml="2" w='4rem' onChange={getPets}/>
                            </Box>
                        </GridItem>
                    
                    </Grid> 
            </GridItem> 


      </Grid>
    )
}

export default PetsTablePage;