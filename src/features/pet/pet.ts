import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios';

export interface Pet {
  name: string
  type: string
  id?: string | number
}

export const fetchAllPets = createAsyncThunk(
    'pets/allPets',
    async (page: number = 1, {rejectWithValue}) => {
      try{
      const response = await axios.get(`http://localhost:3000/pets?_limit=7&_page=${page}`)
      return response && response.data
      }catch(e: any){
        return rejectWithValue(e.message)
      }
    }
  )
export const addNewPet = createAsyncThunk(
    'pets/newPet',
    async (data: any, thunkAPI) => {
        try{
      const response = await axios.post('http://localhost:3000/pets', data)
      await thunkAPI.dispatch(fetchAllPets(1))
      return response && response.data
    } catch(err: any){
        console.log(err)
        return thunkAPI.rejectWithValue(err.message)
    }}
  )

const initialState: {pet: Array<Pet>, error: {"fetchError": string | null, "createError":string | null}, success: boolean} = {pet: [], error:{"fetchError":'', "createError":''}, success: false}

export const petSlice = createSlice({
  name: 'pet',
  initialState,
  reducers: {
    create: (state, action: PayloadAction<any>) => {
        console.log(state, "here")
      state.pet = (action.payload)
    },
    updateSucess: (state) => {
      state.success = false
    }
  },extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder
        .addCase(fetchAllPets.fulfilled, (state, action) => {
            // Add user to the state array
            state.pet = action.payload ? [...action.payload] : []
            state.error.fetchError = null
            return state
        })

    builder.addCase(addNewPet.rejected, (state, action: any) => {
            // Add user to the state array
            state.error.createError = action.payload
            return state
        })
    builder.addCase(addNewPet.fulfilled, (state, action: any) => {
            // Add user to the state array
            state.success = true
            return state
        })
    builder.addCase(fetchAllPets.rejected, (state, action: any) => {
            // Add user to the state array
            console.log(action.payload)
            state.error.fetchError = "Failed To Load Data" 
            // return state
        })

  },
})

// Action creators are generated for each case reducer function
export const { create, updateSucess } = petSlice.actions

export default petSlice.reducer