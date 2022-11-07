import { Grid, GridItem, Heading } from "@chakra-ui/react";
import { FC } from "react";



const Nav: FC<any> = (props) => {
    return (
        <Grid tabIndex={0} templateColumns='repeat(5, 1fr)' w='100%' bg='gray.500' gap={6}>
            <GridItem w='100%' h='4rem' m='3' p="1rem">
                <Heading as='h1' noOfLines={1} color="white">
                    {props.text}
                </Heading>
            </GridItem>
        </Grid>
        )
}

export default Nav;