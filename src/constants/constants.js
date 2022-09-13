import { createTheme } from "@mui/material";
import { gridClasses, GridToolbarContainer, GridToolbarExport } from "@mui/x-data-grid";

export const SERVER_URL='https://ryd-backend.herokuapp.com/';
export const theme = createTheme({
    status: {
        danger: '#e53e3e',
    },
    palette: {
        primary: {
        main: '#3E3B70',
        darker: '#053e85',
        },
        neutral: {
        main: '#2E3B55',
        contrastText: '#fff',
        },
    },
});

export function CustomToolbar() {
    return (
    <GridToolbarContainer 
    className={gridClasses.toolbarContainer}>
    <GridToolbarExport />
    </GridToolbarContainer>
    );
   }
