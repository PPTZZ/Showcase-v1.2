import { useState, useEffect, useRef } from "react";
import { Button, FormLabel, Input, Paper, Stack, TextField, Typography } from "@mui/material"
import { FileUploadOutlined } from "@mui/icons-material";
import { usePostsContext } from "../hooks/usePostsContext";
import { useAuthContext } from "../hooks/useAuthContext";

export const Edit = ({onClose})=> {

    const [file, setFile] = useState();
    const [preview, setPreview] = useState();
    const [title, setTitle] = useState('');
    const [descr, setDescr] = useState('');
    const [link, setLink] = useState('');
    const [error, setError] = useState(null);
    
    const { dispatch } = usePostsContext();
    const { user } = useAuthContext();
    
    const fileInputRef = useRef();

    useEffect(()=> {
        if (file){
            const reader = new FileReader();
            reader.onloadend = ()=>{
                setPreview(reader.result);
            }
            reader.readAsDataURL(file)
        } else {
            setPreview(null);
        }
    }, [file])


    const handleChange = (e)=> {
        setFile(e.target.files[0]);
    }

    const handleSubmit = async (e)=>{
        e.preventDefault()

        if(!user){
            setError('You must be Logged in')
            return
        }

        const post = { title, description: descr, link}
        const response = await fetch('http://localhost:5000/api/posts',{
            method: 'PATCH',
            body: JSON.stringify(post),
            headers:{
                'Content-Type': 'application/json',
                'Authorization': `Bearere ${user.token}`
            }
        })
        const json = await response.json()

        if(!response.ok){
            setError(json.error)
        }
        if(response.ok){
            setTitle('')
            setDescr('')
            setLink('')
            setError(null);
            dispatch({type:'EDIT_POST', payload: json})
            console.log({message: 'post added sucessfully'})
        }
        if(error){
            console.log(error)
        }
        onClose();
    }

    return(
            <Paper
                sx={{
                    width:'31.5rem',
                    height:'50rem',
                    display:'flex',
                    flexFlow: 'column',
                    justifyContent:'center',
                    alignItems:'center'
                }}
            >   
                <form
                    onSubmit={handleSubmit}
                >
                <Paper
                    elevation={0}
                    sx={{
                        bgcolor:'ActiveCaption',
                        height:'17.75rem',
                        width:'26.5rem',
                        mb:2
                        
                    }}
                >
                    <Input
                        inputProps={{
                            accept:'image/*'
                        }}
                        type="file"
                        id="upload"
                        onChange={handleChange}
                        ref={fileInputRef}
                        sx={{
                            display:'none'
                        }}
                    />
                    { preview ? (
                    <FormLabel
                        htmlFor="upload"
                    >
                        <img
                            src={preview}
                            onClick={()=> setPreview(null)}
                            style={{
                                height:'17.75rem',
                                width:'100%',
                                objectFit:'cover',
                                borderRadius:'6px',
                                cursor:'pointer'
                            }}
                        />
                    </FormLabel>
                    ) : (       
                    <FormLabel
                        htmlFor="upload"
                        sx={{   
                            height:'100%',
                            display:'flex',
                            justifyContent:'center',
                            alignItems:'center',
                            ":hover":{
                                cursor:'pointer'
                            }
                        }}
                    >
                        <Typography
                            color={'primary'}
                            sx={{
                                display:'flex',
                                flexDirection:'column',
                                alignItems:'center'
                            }}
                        >
                            <FileUploadOutlined/>
                            Upload picture
                        </Typography>
                    </FormLabel>
                    )
                    }
                </Paper>
                <Typography
                    sx={{
                        position:'relative',
                        right:'38%'
                    }}
                >
                    Title</Typography>
                <TextField

                    sx={{
                        width:'26rem',
                        '& .MuiInputBase-root':{
                            height:'2rem',
                        }
                    }}
                >
                </TextField>
                <Typography
                    sx={{
                        mt:1,
                        position:'relative',
                        right:'33%'
                    }}
                >
                    Description</Typography>
                <TextField
                    multiline
                    rows={6}
                    sx={{
                        width:'26rem',
                    }}
                >
                </TextField>
                <Typography
                    sx={{
                        mt:1,
                        position:'relative',
                        right:'38%'
                    }}
                >
                    Link</Typography>
                <TextField
                    sx={{
                        width:'26rem',
                        '& .MuiInputBase-root':{
                            height:'2rem'
                        }
                    }}
                >
                </TextField>
                <Stack
                    direction={'row'}
                    spacing={13}
                    mt={5}
                >
                    <Button 
                        onClick={onClose}
                        variant="outlined"
                        color="primary"
                        sx={{
                            width:'9rem',
                            height:'2rem'
                        }}

                    >
                        <Typography>
                            Cancel
                        </Typography>
                    </Button>
                    <Button
                        onClick={handleSubmit} 
                        variant="contained"
                        color="primary"
                        type="submit"
                        sx={{
                            width:'9rem',
                            height:'2rem'
                        }}

                    >
                        <Typography>
                            Save
                        </Typography>   
                    </Button>
                </Stack>
                </form>
            </Paper>

    )     
}