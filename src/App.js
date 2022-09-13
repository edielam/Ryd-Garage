import './App.css';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/system';
import Login from './components/Login';

function App() {
  return (
    <Container maxWidth="xl">
      <AppBar position='static'>
        <Toolbar sx={{bgcolor: '#3E3B70'}}>
          <Typography variant='h6'>
            Ryd Garrage</Typography>
        </Toolbar>
      </AppBar><br/>
      <Login/>
    </Container>
      
  );
}

export default App;
