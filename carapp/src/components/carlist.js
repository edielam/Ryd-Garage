import React, { Fragment, useEffect, useState } from "react";
import { CustomToolbar, SERVER_URL } from "../constants/constants";
import { DataGrid} from '@mui/x-data-grid';
import { Alert, AlertTitle, IconButton, Snackbar, Stack} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import AddCar from "./addCar";
import EditCar from "./editCar";

function CarList(){
    const [cars, setCars] = useState([]);
    useEffect(() => {
        const token = sessionStorage.getItem("jwt");
        fetch(SERVER_URL + 'api/cars',{
            headers: { 'Authorization' : token }
            })
        .then(response => response.json())
        .then(data => setCars(data._embedded.cars))
        .catch(err => console.error(err));
    }, []);
    const columns = [
        {field: 'brand', headerName: 'Brand', width: 200},
        {field: 'model', headerName: 'Model', width: 200},
        {field: 'color', headerName: 'Color', width: 200},
        {field: 'registerNumber', headerName: 'Register Number', width: 200},
        {field: 'years', headerName: 'Year', width: 200},
        {field: 'price', headerName: 'Price', width: 150},
        {
            field: '_links.car.href', 
            headerName: '', 
            sortable: false,
            filterable: false,
            renderCell: row => 
            <EditCar 
            data={row} 
            updateCar={updateCar} />
            },
        {
            field: '_links.self.href', 
            headerName: '', 
            sortable: false,
            filterable: false,
            renderCell: row => 
            <IconButton onClick={() => onDelClick(row.id)}>
                <DeleteIcon color='error'/>
            </IconButton>,
             width: 150
            }
    ]

    const fetchCars= () => {
        const token = sessionStorage.getItem("jwt");
        fetch(SERVER_URL + 'api/cars', {
            headers: { 'Authorization' : token }
            })
        .then(response => response.json())
        .then(data => setCars(data._embedded.cars))
        .catch(err => console.error(err));
    }
    useEffect(() => {
        fetchCars();
    }, []);
    
    const onDelClick =(url) => {
        if (window.confirm("Please Confirm")) {
            const token = sessionStorage.getItem("jwt");
            fetch(url, {
                method: 'DELETE',
                headers: { 'Authorization' : token }
                })
            .then(response => {if(response.ok){fetchCars(); setOpen(true);}
            else {
                alert('Something went wrong!');
                }
            })
            .catch(err => console.error(err))
            }
    }
    const [open, setOpen] = useState(false);
    const addTheCar = (car) => {
        const token = sessionStorage.getItem("jwt");
        fetch(SERVER_URL + 'api/cars',
        {
        method: 'POST', 
        headers: { 'Content-Type':'application/json', 'Authorization' : token },
        body: JSON.stringify(car)
        })
        .then(response => {
        if (response.ok) {
        fetchCars();
        }
        else {
            <Alert severity="error">
                <AlertTitle>Error</AlertTitle>
                Something went <strong>wrong!</strong>
            </Alert>
        }
    })
        .catch(err => console.error(err))
    }
    const updateCar = (car, link) => {
        fetch(link,
        { 
        method: 'PUT', 
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(car)
        })
        .then(response => { if (response.ok) {
            fetchCars();
        } else {
            alert('Something went wrong!');
            }
        })
        .catch(err => console.error(err))
       }
    return(
        <Fragment>
            <Stack mt={1} mb={2} alignItems="center">
                <AddCar addCar={addTheCar}/>
            </Stack>
            <div  style={{ height: 500, width: '100%' }}>
            <DataGrid
            rows={cars}
            columns= {columns}
            getRowId={row => row._links.self.href}
            components={{Toolbar : CustomToolbar}}/>
            <Snackbar
            open={open}
            autoHideDuration={2500}
            onClose={() => setOpen(false)}
            message="Removed successfully!"
            />
        </div>
        </Fragment>
    );
}
export default CarList;