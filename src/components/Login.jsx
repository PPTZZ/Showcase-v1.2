import { Typography, Button, Paper, Grid, TextField, makeStyles } from "@mui/material"
import '../assets/styles/Login.css'



export default function Login() {
    
    return(
        <>
        <Grid container direction={'row-reverse'}>
            <Grid item md={4} xs={12}>
                <Paper sx={{ height:'100dvh'}}> 
                    <Typography
                        variant="h1"
                        align="center"
                    >
                        Login
                    </Typography>
                    <form noValidate>
                        <Typography>Email</Typography>
                        <TextField
                            id="email"
                            variant="outlined"
                            type="email"
                            required
                                sx={{
                                width:'17rem',
                                height:'2rem',
                                }}
                        />
                    </form>
                    <Button
                        onClick={()=> console.log('Click!')}
                        type="submit"
                        variant="contained"
                        color="primary"
                        sx={{
                            width:'17rem',
                            height:'2rem',
                            }}
                    >
                        Login
                    </Button>
                </Paper>
            </Grid>
        </Grid>
        </>
    )
}