import { Typography, Button, Paper, Grid, TextField } from "@mui/material"
import { Link } from "react-router-dom"



export const Register = ()=> {
    return(
       <>
        <Grid container direction={'row'}>
            <Grid item md={8} xs={0}>
                <img src="/Images/desktop.jpg" className="desktop"/>
            </Grid>
            <Grid item md={4} xs={12}>
                <Paper
                    sx={{
                        height:'100dvh',
                        display:'flex',
                        justifyContent:'center',
                        alignItems:'center'
                    }}> 
                    <form className="loginForm">
                        <Typography
                            variant="h1"
                            align="center"
                            sx={{
                                mb:15
                            }}
                        >
                            Register
                        </Typography>
                        <Typography
                            sx={{
                                alignSelf:'flex-start',
                                mt:1
                            }}
                        >
                            Name
                        </Typography>
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
                        <Typography
                            sx={{
                                alignSelf:'flex-start',
                                mt:1
                            }}
                        >
                            Email
                        </Typography>
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
                        <Typography
                            sx={{
                                alignSelf:'flex-start',
                                mt:1
                            }}
                        >
                            Password
                        </Typography>
                        <TextField
                            id="password"
                            variant="outlined"
                            type="password"
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
                                mt:1
                                }}
                        >
                            Register
                        </Button>
                        <Link 
                            to={'/'} 
                            style={{
                                alignSelf:'flex-start',
                                textDecoration:'none'
                            }}
                        >
                            <Typography
                                color={'primary'}
                                sx={{
                                    mt:0.5
                                }}
                            >
                                Already have an account? Login
                            </Typography>
                        </Link>
                    </form>
                </Paper>
            </Grid>
        </Grid>
       </>
    )
}
