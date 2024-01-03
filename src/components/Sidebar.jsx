import { Box, Typography, Paper, Button } from "@mui/material"
import { ModeEditOutline, LocalPostOfficeOutlined, RoomOutlined} from "@mui/icons-material";

export const Sidebar = ()=>{
    return(
        <>
            <Paper
                        elevation={3}
                        sx={{
                            display:'flex',
                            flexFlow:'column',
                            gap: 1,
                            alignItems:'center',
                            p:'1rem',
                            height:{
                                xs:'79vh',
                                md:'73vh'
                            }
                        }}
                    >
                        <Box>
                            <img src="/Images/Profile Picture.svg"/>
                        </Box>
                        <Typography
                            variant="h2"
                        >
                            Jackson Brown
                        </Typography>
                        <Typography 
                            variant="h3"
                        >
                            Web Developer
                        </Typography>
                        <Typography
                            variant="h3"
                            sx={{
                                display:'flex',
                                alignItems:'center',
                                gap:'5px',
                                mt:'10dvh'
                            }}
                        >
                            <LocalPostOfficeOutlined/>
                            jacksonbrown@gmail.com
                        </Typography>
                        <Typography
                            variant="h3"
                            sx={{
                                display:'flex',
                                alignItems:'center'
                            }}
                        >
                            <RoomOutlined/>
                            Cluj-Napoca
                        </Typography>
                        <Button
                            variant="contained"
                            color="primary"
                            sx={{
                                width:'14rem',
                                height:'2rem',
                                mt:'12dvh'
                            }}
                        >
                            <Typography
                                sx={{
                                    display:'flex',
                                    alignItems:'center',
                                }}
                            >
                                <ModeEditOutline/>
                                Edit profile
                            </Typography>
                        </Button>
                        <Typography
                            variant="h3"
                            sx={{
                                mt:'8dvh'
                            }}
                        >
                            Member since: Dec 26, 2023
                        </Typography>
                    </Paper>
        </>
    )
}