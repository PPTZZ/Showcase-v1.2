import { useState } from "react";
import { Box, Button, FormLabel, Input, Paper, Stack, TextField, Typography } from "@mui/material"

export const Upload = ()=> {

    const [file, setFile] = useState();
    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }
    return(
        <>
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
                <Input type="file" id="upload" onChange={handleChange} sx={{display:'none'}}></Input>
                <Box>
                <FormLabel htmlFor="upload">
                    upload <br/>             
                    <img src={file} style={{height:'15rem'}}/>
                </FormLabel>
                </Box>
                <Typography>Title</Typography>
                <TextField

                    sx={{
                        width:'26rem',
                        '& .MuiInputBase-root':{
                            height:'2rem',
                        }
                    }}
                >
                </TextField>
                <Typography>Description</Typography>
                <TextField
                    multiline
                    rows={6}
                    sx={{
                        width:'26rem',
                    }}
                >
                </TextField>
                <Typography>Link</Typography>
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
                    spacing={30}
                    mt={5}
                >
                    <Button 
                        variant="outlined"
                        color="primary"
                    >
                        <Typography>
                            Cancel
                        </Typography>
                    </Button>
                    <Button 
                        variant="contained"
                        color="primary"
                        type="submit"
                    >
                        <Typography>
                            Submit
                        </Typography>   
                    </Button>
                </Stack>
            </Paper>
        </>
    )     
}