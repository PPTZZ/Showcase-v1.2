import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material"
import { DeleteOutlineOutlined, ModeEditOutlineOutlined, VisibilityOutlined } from "@mui/icons-material";
import { useState } from "react";
import { Edit } from "./Edit";
import { Modal } from './Modal'
import { Delete } from "./Delete";
import { Hide } from "./Hide";

export const DisplayCard = ()=>{

    const [edit, setEdit] = useState(false)
    const [remove, setRemove] = useState(false)
    const [hide, setHide] = useState(false)
    
    return(
        <>
        <Card
            sx={{
                width:'370px',
                height:'400px'
            }}
        >
            <CardMedia
                component={'img'}
                height={'200px'}
                image="/Images/test pic 1.jpeg"
                alt="picture placeholder"
            />
            <CardContent>
                <Typography variant="h2" gutterBottom component={'div'}>
                    RoboFriends
                </Typography>
                <Typography variant="h3">
                    This text is a placeholder and will be changed when i get the DB working
                </Typography>
            </CardContent>
            <CardActions
                sx={{
                    mt:4
                }}
            >
                <Button
                    onClick={(e)=>{
                        e.preventDefault,
                        setEdit(true)
                    }}
                    size="small"
                >
                    <Typography
                        sx={{
                            display:'flex',
                            alignItems:'center',
                            justifyContent:'space-around'
                        }}
                    >
                        <ModeEditOutlineOutlined/>
                        Edit
                    </Typography>
                </Button>
                <Modal open={edit}>
                        <Edit onClose={()=> setEdit(false)}/>
                </Modal>
                <Button
                    onClick={(e)=>{
                        e.preventDefault,
                        setRemove(true)
                    }}
                    size="small"
                >
                    <Typography
                        sx={{
                            display:'flex',
                            alignItems:'center',
                            justifyContent:'space-around'
                        }}
                    >
                        <DeleteOutlineOutlined/>
                        Delete
                    </Typography>
                </Button>
                <Modal open={remove}>
                        <Delete onClose={()=> setRemove(false)}/>
                </Modal>
                <Button
                    onClick={(e)=>{
                        e.preventDefault,
                        setHide(true)
                    }}
                    size="small"
                >
                    <Typography
                        sx={{
                            display:'flex',
                            alignItems:'center',
                            justifyContent:'space-around'
                        }}
                    >
                        <VisibilityOutlined/>
                        Hide
                    </Typography>
                </Button>
                <Modal open={hide}>
                        <Hide onClose={()=> setHide(false)}/>
                </Modal>
            </CardActions>
        </Card>
            
        </>
    )
}