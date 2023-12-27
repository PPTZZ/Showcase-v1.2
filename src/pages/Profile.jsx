import { Box, Grid, } from "@mui/material"
import { Navbar } from "../components/Navbar"
import { Sidebar } from "../components/Sidebar"
import { Content } from '../components/Content'







export const Profile = ()=>  {
    return(
        <>
            <Navbar/>
            <Box>
                <img src="/Images/keyboard.jpg" style={{minHeight:'100px', width:'100%', height:'150px'}}/>
            </Box>
            <Grid
                container
                sx={{
                    bgcolor:'lightGray'
                }}
            >
                <Grid item xs={12} s={12} md={1.6}
                >
                    <Sidebar/>
                </Grid>
                <Grid item xs={12} s={12} md={10.4}>
                        <Content/>
                </Grid>
            </Grid>

        </>
    )
}