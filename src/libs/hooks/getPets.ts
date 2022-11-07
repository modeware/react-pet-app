
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../../app/store';
import {fetchAllPets} from "../../features/pet/pet";

export const usePetsHook = () => {
    const dispatch = useDispatch<AppDispatch>()
    return (pageNumber: number) => dispatch(fetchAllPets(pageNumber))
}
