import { fireEvent, screen } from '@testing-library/react'
// We're using our own custom render function and not RTL's render.
import { renderWithProviders } from '../utils/test-utils'
import PetForm from '../components/PetForm/PetForm';
import axios from 'axios';
jest.mock('axios');
const maxios = axios as jest.Mocked<typeof axios>;

describe('PETFORM - Create PET', ()=>{
  afterEach(() => {
    jest.resetModules();
  });
  test('renders Pet form and displays Luna on input change', async () => {
    maxios.get.mockResolvedValueOnce({data: []});
    maxios.post.mockResolvedValueOnce({data: []});
    
    renderWithProviders(<PetForm/>)
    expect(screen.getByText("Create Pet")).toBeInTheDocument()
    fireEvent.click(screen.getByText("Create Pet"))
  
    const inputNode1: any = screen.getByPlaceholderText('Pet Name')
    const inputNode2 = screen.getByPlaceholderText('Animal Type')
    const button = screen.getByText('Submit')
  
    fireEvent.change(inputNode1, {target:{value: "Luna"}})
    fireEvent.change(inputNode2, {target:{value: "Dog"}})
  
    expect(inputNode1.value).toEqual('Luna')
    
    fireEvent.click(button)
    expect(maxios.post).toHaveBeenCalledTimes(1)
    expect(await screen.findByText("Successfully Added Pet.")).toBeInTheDocument()
    expect(maxios.get).toHaveBeenCalledTimes(1)
  
 
  })

  })
  


