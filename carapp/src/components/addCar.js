import React, { useState } from "react";
import { Dialog, DialogContent,
     DialogTitle, DialogActions, Button, ThemeProvider, TextField, Stack } from "@mui/material";
import { theme } from "../constants/constants";


function AddCar(props){
    const [open, setOpen] = useState(false)
    const [car, setCar] = useState({
        brand: '',
        model: '',
        color: '',
        registerNumber: '',
        years: '',
        price: ''
    })
    const handleAdd = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const handleChange = (event) => {
        setCar({...car, [event.target.name]: event.target.value});
       }
    const handleSave = () => {
        props.addCar(car);
        handleClose();
       }
    return(
        <div>
            <ThemeProvider theme={theme}>
                <Button color='primary' variant="contained"
                onClick={handleAdd} size="small">New Car
                </Button>
            </ThemeProvider>
             <Dialog open={open} onClose={handleClose} maxWidth='xs' fullWidth='true'>
                <DialogTitle>New Car</DialogTitle>
                <DialogContent>
                    <Stack spacing={2} mt={1}>
                        <TextField label="Brand" name="brand" 
                        autoFocus variant='filled' value={car.brand} onChange={handleChange}/>
                        <TextField label="Model" name="model" 
                        variant="filled" value={car.model} onChange={handleChange}/>
                        <TextField label="Color" name="color" 
                        variant="filled" value={car.color} onChange={handleChange}/>
                        <TextField label="Register Number" name="registerNumber" 
                        variant="filled" value={car.registerNumber} onChange={handleChange}/>
                        <TextField label="Year" name="years" 
                        variant="filled" value={car.years} onChange={handleChange}/>
                        <TextField label="Price" name="price" 
                        variant="filled" value={car.price} onChange={handleChange}/>
                    </Stack>
                </DialogContent>
                <DialogActions>
                    <ThemeProvider theme={theme}>
                        <Button color='primary' variant="contained"
                        onClick={handleClose} size='medium'>Cancel</Button>
                        <Button color='primary' variant="outlined"
                        onClick={handleSave} size='medium'>Save</Button>
                </ThemeProvider>
                </DialogActions>
             </Dialog>
        </div>
    )
}
export default AddCar;