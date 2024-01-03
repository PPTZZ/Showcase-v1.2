import { Typography, Button, Paper, Grid, TextField,} from "@mui/material"
import { useState } from "react"
import { Link } from "react-router-dom"
import { ForgotPass } from "../components/ForgotPass";
import { Modal } from '../components/Modal';


export const Login = ()=> {

    const [passModal, openPassModal] = useState(false);

    
    return(
        <>
        <Grid container>
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
                        }}
                > 
                    <form className="loginForm">
                        <Typography
                            variant="h1"
                            align="center"
                            sx={{
                                mb:15
                            }}
                        >
                            Login
                        </Typography>
                        <Typography
                            sx={{
                                alignSelf:'flex-start'
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
                            type={'password'}
                            required
                                sx={{
                                width:'17rem',
                                '& .MuiInputBase-root':{
                                    height:'2rem'
                                }
                                }}
                        />
                        <Typography
                            onClick={()=> openPassModal(true)}
                            color={'primary'}
                            sx={{
                                alignSelf:'flex-end',
                                mt:0.5,
                                fontSize:15,
                                ":hover":{
                                    cursor:'pointer'
                                }
                            }}
                        >
                            Forgot your password?
                        </Typography>
                        <Modal open={passModal}>
                            <ForgotPass onClose={()=> openPassModal(false)}/>
                        </Modal>
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
                                    mt:1
                                    }}
                            >
                            <Typography>
                                Login
                            </Typography>
                            </Button>
                        </Link>
                        <Link
                            to={'/register'}
                            style={{
                                textDecoration:'none',
                                alignSelf:'flex-start',
                            }}
                        >
                            <Typography
                                color={'primary'}
                                sx={{
                                    mt:0.5
                                }}
                            >
                                Don’t have an account? Sign up
                            </Typography>
                        </Link>
                    </form>
                </Paper>
            </Grid>
        </Grid>
        </>
    )
}