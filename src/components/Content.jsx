import { Paper, ToggleButton, ToggleButtonGroup, Typography } from "@mui/material"
import { useState } from "react"
import { DisplayCard } from "./DisplayCard";

export const Content = ()=>{

    const [display, setDisplay] = useState('projects');

    const handleDisplay = (event, newDisplay)=> {
        setDisplay(newDisplay)
    }
    
    
    return(
        <>
        <ToggleButtonGroup
            exclusive
            size="small"
            value={display}
            onChange={handleDisplay}
            sx={{
                mt:1.5,
                ml:1.5
            }}

        >
            <ToggleButton
                value={'projects'}
            >
                <Typography 
                    variant="h3"
                    fontWeight={'medium'}
                >
                    Projects
                </Typography>
            </ToggleButton>
            <ToggleButton
                value={'Drafts'}
            >
                <Typography 
                    variant="h3"
                    fontWeight={'medium'}
                >
                    Drafts
                </Typography>
            </ToggleButton>
        </ToggleButtonGroup>   
        <Paper 
            elevation={3}
            sx={{
                width: '83vw',
                minWidth:'300px',
                height:'auto',
                mt:'0.5rem',
                ml:1.5,
                p:'1rem'
            }}
        >
            <DisplayCard/>
        </Paper>
        </>
    )
}