import { Typography, Button, Paper, Grid, TextField } from "@mui/material"



export const Register = ()=> {
    return(
       <>
        <Grid container direction={'row-reverse'}>
            <Grid item md={4} xs={12}>
                <Paper sx={{ height:'100dvh'}}> 
                    <form className="loginForm">
                        <Typography
                            variant="h1"
                            align="center"
                        >
                            Register
                        </Typography>
                        <Typography>Name</Typography>
                        <TextField
                            id="name"
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
                        <Typography>Already have an account? Login</Typography>
                    </form>
                </Paper>
            </Grid>
        </Grid>
       </>
    )
}
