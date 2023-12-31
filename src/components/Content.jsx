import { Button, Modal, Paper, ToggleButton, ToggleButtonGroup, Typography } from "@mui/material";
import { Add } from "@mui/icons-material";
import { useState,} from "react";
import { CardList } from "./CardList";
import { Upload } from './Upload';


export const Content = ()=>{


    const [display, setDisplay] = useState('projects');
    const [isOpen, setIsOpen] = useState(false)

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
                p:'1rem',
            }}
        >
                <Button
                    onClick={(e)=>{
                        e.preventDefault
                        setIsOpen(true)
                    }}
                    variant="contained"
                    color="primary"
                    sx={{
                        width:'10rem',
                        height:'2rem',
                        mb:2,
                        position:"relative",
                        left:{
                            xs:'55%',
                            md:'90%'
                        }
                    }}
                >
                    <Typography
                        sx={{
                            display:'flex',
                            justifyContent:'space-around',
                            alignItems:'center'
                        }}
                    >   
                        <Add/>
                        New Project
                    </Typography>
                </Button>
                <Modal open={isOpen} >
                    <Upload onClose={()=> setIsOpen(false)}/>
                </Modal>
                <CardList/>
        </Paper>
        </>
    )
}