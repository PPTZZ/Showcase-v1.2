import { useState, useEffect, useRef } from "react";
import { Button, FormLabel, Input, Paper, Stack, TextField, Typography } from "@mui/material"
import { FileUploadOutlined } from "@mui/icons-material";
import { usePostsContext } from "../hooks/usePostsContext";
import { useAuthContext } from "../hooks/useAuthContext";

export const Upload = ({onClose})=> {

    const [file, setFile] = useState();
    const [preview, setPreview] = useState();
    const [title, setTitle] = useState('');
    const [descr, setDescr] = useState('');
    const [link, setLink] = useState('');
    const [error, setError] = useState(null);

    const fileInputRef = useRef();

    const { dispatch } = usePostsContext();
    const { user } = useAuthContext();

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


    const handleSubmit = async (e)=>{
        e.preventDefault()

        if(!user){
            setError('You must be Logged in')
            return
        }
        const image = await JSON.stringify(file);
        const post = { title, description: descr, link, image}
        const response = await fetch('http://localhost:5000/api/posts',{
            method: 'POST',
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
            dispatch({type:'CREATE_POST', payload: json})
            console.log({message: 'post added sucessfully', json})
        }
        if(error){
            console.log(error)
        }
        onClose();
    } 



    return(
        <div 
            style={{
                height:'100vh',
                width:'100vw',
                display:'flex',
                justifyContent:'center',
                alignItems:'center'
            }}
        >
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
                
                <form onSubmit={handleSubmit}>
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
                        onChange={(e)=>setFile(e.target.files[0])}
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
                        alignSelf:'flex-start'
                    }}
                >
                    Title:
                </Typography>
                <TextField
                    onChange={(e)=>setTitle(e.target.value)}
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
                        alignSelf:'flex-start'
                    }}
                >
                    Description:
                </Typography>
                <TextField
                    onChange={(e)=>setDescr(e.target.value)}
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
                        alignSelf:'flex-start'
                    }}
                >
                    Link:
                </Typography>
                <TextField
                    onChange={(e)=>setLink(e.target.value)}
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
                        variant="contained"
                        color="primary"
                        type="submit"
                        sx={{
                            width:'9rem',
                            height:'2rem'
                        }}

                    >
                        <Typography>
                            Add project
                        </Typography>   
                    </Button>
                </Stack>
                </form>
            </Paper>
        </div>
    )     
}