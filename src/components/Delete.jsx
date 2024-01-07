import { Button, Paper, Stack, Typography } from "@mui/material"


export const Delete = ({onClose})=>{


    return(
        <>
            <Paper
                elevation={0}
                sx={{
                    width:{
                        xs:'100vw',
                        md:'30rem'
                    },
                    height:'15rem',
                    p:'2.5rem'
                }}
            >
                <Typography
                    variant="h1"
                    align="center"
                >
                    Are you sure you want to delete this project?
                </Typography>
                <Typography
                    variant="h3"
                    align="center"
                    mt={3}
                >
                    This action is not reversable.
                </Typography>
                <Stack
                    direction={'row'}
                    justifyContent={'center'}
                    spacing={10}
                    mt={8}
                >
                    <Button
                        onClick={onClose}
                        variant="outlined"
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
                        sx={{
                            width:'9rem',
                            height:'2rem'
                        }}
                    >
                        <Typography>
                            Confirm
                        </Typography>
                    </Button>
                </Stack>
            </Paper>
        </>
    )
}