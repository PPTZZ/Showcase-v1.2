import { Typography, Button, Paper, Grid, TextField } from "@mui/material"
import { Link } from "react-router-dom"


export const Login = ()=> {

    
    return(
        <>
        <Grid container>
            <Grid item md={8} xs={0}>
                <img src="/Images/desktop.jpg" className="desktop"/>
            </Grid>
            <Grid item md={4} xs={12}>
                <Paper sx={{ height:'100dvh'}}> 
                    <form className="loginForm">
                        <Typography
                            variant="h1"
                            align="center"
                        >
                            Login
                        </Typography>
                        <Typography>Email</Typography>
                        <TextField
                            id="email"
                            variant="outlined"
                            type="email"
                            required
                                sx={{
                                width:'17rem',
                                '& .MuiInputBase-root':{
                                    height:'2rem'
                                }
                                }}
                        />
                        <Typography>Password</Typography>
                        <TextField
                            id="password"
                            variant="outlined"
                            type="email"
                            required
                                sx={{
                                width:'17rem',
                                '& .MuiInputBase-root':{
                                    height:'2rem'
                                }
                                }}
                        />
                        <Typography>Forgot your password?</Typography>
                        <Link
                            to={'/profile'}
                            style={{textDecoration:'none'}}
                        >   
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
                            <Typography>
                                Login
                            </Typography>
                            </Button>
                        </Link>
                        <Typography>Don’t have an account? Sign up</Typography>
                    </form>
                </Paper>
            </Grid>
        </Grid>
        </>
    )
}