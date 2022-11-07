
import { Box, Text } from '@chakra-ui/react';
import { Link } from "react-router-dom";
import { HamburgerIcon } from '@chakra-ui/icons';
import {useState} from 'react'

const Sidebar = () => {
    const [display, setDisplay] = useState(['none', 'none', 'none'])

    const displayBlock = () => {
        if(display[0] === 'flex'){
            setDisplay(['none', 'none', 'none'])
        }else{
            setDisplay(['flex', 'flex', 'none'])
        }
    }

    return (
        <Box h="max-content">
            <HamburgerIcon m="2"  onClick={()=>displayBlock()} display={['block', 'block', 'none']}/>
        <Box display={['none', 'none', 'block']} zIndex={[10, 1]}>
            <Box h='2rem' p='1rem' ml="2rem">
            <Link to={`/overview`} className="pet">
                <Text as="b">
                    Overview
                </Text>
            </Link>
                        
            </Box>
            <Box h='2rem' p='1rem'  ml="2rem">
            <Link to={`/`} className="pet">
                <Text as="b">
                    Pets
                </Text>
            </Link>   
            </Box>
        </Box>



        <Box borderBottom={"1px solid lightgray"} display={display} flexDirection='column' alignItems={'start'}>
            <Box h='2rem' mb="3" w="100%">
                <Link to={`/overview`} className="pet">
                    <Text ml="3rem" >

                        Overview
                    </Text>
                </Link>
                        
            </Box>
            <Box h='2rem' mb="3"  w="100%">
            <Link to={`/`} className="pet">
                <Text ml="3rem">
                    Pets
                </Text>
            </Link>   
            </Box>
        </Box>


        </Box>
    )
}

export default Sidebar;