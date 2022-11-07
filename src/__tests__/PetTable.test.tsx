import { fireEvent, screen } from '@testing-library/react';
// We're using our own custom render function and not RTL's render.
import { renderWithProviders } from '../utils/test-utils';
import PetTable from '../components/PetTable/PetTable';
import axios from 'axios';
import { fetchAllPets } from '../features/pet/pet';
jest.mock('axios');
const maxios = axios as jest.Mocked<typeof axios>;

describe('Test Pet Table', ()=> {
    afterEach(() => {
        jest.resetModules();
      });
    test('Test if table contains Scooby', async ()=>{
        maxios.get.mockResolvedValue({data: [ {
            "id": 1,
            "name": "Scooby",
            "type": "Dog"
          }]});
        maxios.post.mockResolvedValue({data: []});
       const {store} = renderWithProviders(<PetTable caption={"Pets"}/>)
       store.dispatch(fetchAllPets(1))

       expect(await screen.findByText("Scooby")).toBeInTheDocument()
    })


})