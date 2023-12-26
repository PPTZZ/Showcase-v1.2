import { AppBar, Toolbar, IconButton, Typography, Box, Stack } from "@mui/material";
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import { Link } from "react-router-dom"
import logo from '/Images/logo.svg'


export const Navbar = ()=> {
    return(
        <AppBar
            elevation={0}
            color="lightGray"
            position="static"
        >
            <Toolbar>
                <Box
                    sx={{flexGrow:1}}
                >
                    <IconButton
                        sx={{
                                mx:'50%',
                                "&.MuiButtonBase-root:hover": {
                                    bgcolor: "transparent"
                                }
                            }}
                    >
                        <img src={logo}/>
                    </IconButton>
                </Box>
                <Stack
                    direction={'row'}
                    spacing={3}
                >
                    <NotificationsOutlinedIcon/>
                    <Link 
                        to={'/'}
                        style={{textDecoration:'none'}}
                    >
                        <Typography
                            color={'primary'}
                            fontWeight={'bold'}
                        >
                        Log out
                        </Typography>
                    </Link>
                </Stack>
            </Toolbar>
        </AppBar>
    )
}