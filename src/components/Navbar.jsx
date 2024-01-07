import { AppBar, Toolbar, IconButton, Typography, Box, Stack } from "@mui/material";
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import logo from '/Images/logo.svg'
import { useLogout } from "../hooks/useLogout";


export const Navbar = ()=> {

    const {logout} = useLogout();

    const handleClick = ()=>{
        logout()
    }
    
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
                        <Typography
                            onClick={handleClick}
                            color={'primary'}
                            fontWeight={'bold'}
                            sx={{
                                ":hover":{
                                    cursor:'pointer'
                                }
                            }}
                        >
                        Log out
                        </Typography>
                </Stack>
            </Toolbar>
        </AppBar>
    )
}