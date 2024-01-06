import { Typography, Button, Paper, Grid, TextField } from "@mui/material"
import { Link } from "react-router-dom"
import { useState } from "react"
import { useRegister } from "../hooks/useRegister"


export const Register = ()=> {
    const [email, setEmail]=useState();
    const [password, setPassword]=useState();
    const { register, isLoading, error } = useRegister();

    const handleSubmit = async (e)=>{
        e.preventDefault();

        await register(email, password)
    }

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
                    <form
                        className="loginForm"
                        onSubmit={handleSubmit}
                    >
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
                            Email
                        </Typography>
                        <TextField
                            onChange={(e)=> setEmail(e.target.value)}
                            value={email}
                            id="email"
                            variant="outlined"
                            type="email"
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
                            onChange={(e)=> setPassword(e.target.value)}
                            value={password}
                            id="password"
                            variant="outlined"
                            type="password"
                            sx={{
                            width:'17rem',
                            '& .MuiInputBase-root':{
                                height:'2rem'
                            }
                            }}
                        />
                        <Button
                            disabled={isLoading}
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
                        {error && <Typography variant="h2">{error}</Typography>}
                    </form>
                </Paper>
            </Grid>
        </Grid>
       </>
    )
}
