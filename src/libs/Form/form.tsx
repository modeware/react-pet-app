import { Button, Grid, GridItem, Input, Box, Text } from '@chakra-ui/react';
import {useState} from 'react'
import { FC } from 'react';
import { FormPropsInterface } from './formInterface';


const SimpleForm: FC<FormPropsInterface> = ({formArray, submitCallBack}) => {

    const initialValue = formArray.reduce((p, c)=> ({...p, [c.name]: {value:'', error:'', touched: false}}) ,{}  )
    const [formValue, setFormValue] = useState<{[key:string]:any}>(initialValue)
    const [containsError, setContainsError] = useState<boolean>(true)



    const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (e: any) => {
             let name = e.target.name
             validateField(e)
             setFormValue((prev)=>({...prev, [name]: {...prev.name, value:e.target.value}}))
    }

    const onSubmit = (e: any) => {
        let fv = formArray.reduce((p, c)=>({...p, [c.name]: formValue[c.name].value}), {})
        resetForm()
        validateField(e)
        submitCallBack && submitCallBack(fv)
    }

    const resetForm = () => {
        setFormValue(initialValue)
    }

    const validateForm = (formValue:any) => {
       for (const field of formArray){
            if(formValue[field.name].error){
                setContainsError(true)
                break
            }else if(!formValue[field.name].touched){
                setContainsError(true)
                break
            }
       }
    }

    const validateField: React.FocusEventHandler<HTMLInputElement> = (e: any): boolean => {
      let currentValue = e.target.value
      let name = e.target.name
      let containsError = false
      if(!currentValue){
        containsError = true
        setContainsError(true)
        setFormValue((prev)=>({...prev, [name]:{...prev[name], error: "Required", touched: true} }))
        validateForm({...formValue, [name]:{...formValue[name], error: "Required", touched: true} })
      }
      else{
        setFormValue((prev)=>({...prev, [name]:{...prev[name], error: "",touched: true} }))
        containsError = false
        setContainsError(false)
        validateForm({...formValue, [name]:{...formValue[name], error: "", touched: true} })
      }
      return containsError;
    }

    return (
        <form>
            {formArray.map(({type, name, placeholder}, index)=>{
                return (
                    <Box key={index+name} mb="5">
                    <Input
                            type={type} 
                            name={name}
                            placeholder={placeholder} 
                            value={formValue[name].value} 
                            onChange={handleInputChange}
                            onBlur={validateField}
                            />
                        <Text color="#FF0000">{formValue[name].error}</Text>
                    </Box>
            )})}
            <Grid  templateColumns='1fr' gridAutoFlow='column' justifyItems='end'>
                <GridItem>
                    <Button disabled={containsError} mr="2" onClick={onSubmit}>Submit</Button>
                </GridItem>
                <GridItem>
                    <Button onClick={resetForm}>Clear</Button>
                </GridItem>
            </Grid>
            </form>
    )
}

export default SimpleForm;