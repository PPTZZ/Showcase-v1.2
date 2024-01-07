import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material"
import { DeleteOutlineOutlined, ModeEditOutlineOutlined, VisibilityOutlined } from "@mui/icons-material";
import { useState } from "react";
import { Edit } from "./Edit";
import { Modal } from './Modal'
import { Delete } from "./Delete";
import { Hide } from "./Hide";
import { usePostsContext } from "../hooks/usePostsContext";
import { useAuthContext } from "../hooks/useAuthContext";
import { Link } from "react-router-dom";

export const DisplayCard = ({post})=>{

    const {dispatch}=usePostsContext();
    const { user } = useAuthContext();
    
    const [edit, setEdit] = useState(false);
    const [remove, setRemove] = useState(false);
    const [hide, setHide] = useState(false);

    const handleDelete =  async (e)=>{
        e.preventDefault();

        if(!user){
            return
        }

        const response = await fetch(`http://localhost:5000/api/posts/${post._id}`,{
            headers:{
                'Authorization': `Bearere ${user.token}`
            },
            method:'DELETE'
        })

        const json = await response.json()

        if(response.ok){
           dispatch({type:'DELETE_POST', payload:json})
        }
    }
    

        

    
    return(
        <>
        <Card
            sx={{
                width:'370px',
                height:'400px',
                display:'flex',
                flexFlow:"column"
            }}
        >
        {!post.img ? (
            <CardMedia
                component={'img'}
                height={'200px'}
                alt="picture placeholder"
                image={'/Images/thumbnail.png'}
                sx={{
                    borderRadius:'6px',
                    width:'100%',
                }}
            />
            )
                :(
                    <CardMedia
                component={'img'}
                height={'200px'}
                alt="picture placeholder"
                image={post.img}
            />
                )
            }
            
            <CardContent>
                <Typography variant="h2" gutterBottom component={'div'}>
                    {post.title}
                </Typography>
                <Typography 
                    sx={{
                        width:'370px',
                        height:'60px'
                    }}
                    variant="h3"
                >
                    {post.description}
                </Typography>
                <Link to={post.link}>
                    <Typography>
                        {post.link}
                    </Typography>
                </Link>
            </CardContent>
            <CardActions>
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
                    onClick={handleDelete}
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
                        <Delete 
                            onClose={()=> setRemove(false)}
                        />
                </Modal>
                <Button
                    
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