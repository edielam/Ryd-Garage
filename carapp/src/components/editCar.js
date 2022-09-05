import React, { useState } from "react";
import { Dialog, DialogContent,
     DialogTitle, DialogActions, Button, ThemeProvider, IconButton, Stack, TextField} from "@mui/material";
import { theme } from "../constants/constants";
import EditIcon from '@mui/icons-material/Edit';


function EditCar(props){
    const [open, setOpen] = useState(false);
    const [car, setCar] = useState({
        brand: '', model: '', color: '', registerNumber: '',
        years: '', price: ''
    });
    const handleClickOpen = () => {
        setCar({
            brand: props.data.row.brand,
            model: props.data.row.model,
            color: props.data.row.color,
            registerNumber: props.data.row.registerNumber,
            years: props.data.row.years,
            fuel: props.data.row.fuel,
            price: props.data.row.price 
            })
        setOpen(true);
    };
    const handleClickClose = () => {
        setOpen(false);
    };
    const handleChange = (event) => {
        setCar({...car, [event.target.name]: event.target.value});
    };
    const handleSave = () => {
        props.updateCar(car, props.data.id);
        handleClickClose();
    }
    return (
        <div>
            <IconButton onClick={handleClickOpen}>
                <EditIcon color="primary"/>
            </IconButton>
            <Dialog  open={open} onClose={handleClickClose} maxWidth='xs' fullWidth='true'>
                <DialogTitle>Change Car Details</DialogTitle>
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
                        onClick={handleClickClose} size='medium'>Cancel</Button>
                        <Button color='primary' variant="outlined"
                        onClick={handleSave} size='medium'>Save</Button>
                </ThemeProvider>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default EditCar;