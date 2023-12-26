import { Box, } from "@mui/material"
import { Navbar } from "../components/Navbar"
import { Sidebar } from "../components/Sidebar"
import { PizdaMatii } from "../components/PizdaMatii"






export const Profile = ()=>  {
    return(
        <>
            <Navbar/>
            <Box>
                <img src="/Images/keyboard.jpg" style={{minHeight:'100px', width:'100%', height:'150px'}}/>
            </Box>
            <PizdaMatii/>
            <Sidebar/>

        </>
    )
}