import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
  } from '@chakra-ui/react'
  import {FC} from 'react';
import { Pet } from '../../features/pet/pet';
  import { TablePropsInterface } from './tableInterface';
import AlertMessage from './../Alert/Alert';


  const SimpleTable: FC<TablePropsInterface<Pet>> = ({caption, header, rows}) => {
  
  return (
  <TableContainer>
  <Table variant='simple'>
    <Thead bg={"gray.100"}>
      <Tr>
        {header && header.map((value, index)=><Th tabIndex={0} key={index}>{value}</Th>)}
      </Tr>
    </Thead>
    <Tbody>
      {rows && rows.map((data, index)=><Tr tabIndex={0} key={index}>{Object.values(data).map((value, index)=><Td tabIndex={0} key={index}>{value}</Td>)}</Tr>)}
    </Tbody>
  </Table>

</TableContainer>
)

}

export {SimpleTable as Table} ;